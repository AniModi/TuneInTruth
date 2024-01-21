import Cookies from "js-cookie";
import { createSpinner } from "./utils/createSpinner";
const backendURL = "https://tuneintruth-2.vercel.app";

async function fun() {
  try {
    createSpinner();
    const matches = [];

    const res = await fetchNews(window.location.href);

    await uploadNews(res);
    const text = res.headline;
    const text2 = `"${res.headline}"`;
    const text3 = res.headline.substring(0, res.headline.length - 1);

    for (const div of document.querySelectorAll("*")) {
      if (
        div.tagName === "H1" &&
        (div as HTMLElement).innerText &&
        ((div as HTMLElement).innerText === text ||
          (div as HTMLElement).innerText === text2 ||
          (div as HTMLElement).innerText === text3)
      ) {
        matches.push(div);

        div.innerHTML = res.rhymingHeadline;

        const div1 = document.createElement("div");
        div1.style.padding = "10px 0";
        div1.style.lineHeight = "1.5";
        div1.style.fontSize = "16px";
        div1.innerHTML = "<b>Bias report : </b>" + res.biasSummary;
        div.parentElement?.append(div1);
      }
    }
  } finally {
    const spinner = document.getElementById("mySpinner");
    if (!spinner) return;
    spinner.parentNode?.removeChild(spinner);
    document.body.style.overflow = "auto";
  }
}

async function main() {
  chrome.storage.onChanged.addListener(async function (
    changes: { [key: string]: chrome.storage.StorageChange },
    areaName: string
  ) {
    if (changes["action"]?.newValue && !document.hidden) {
      fun();
    }
  });

  if (Cookies.get("jwt")) {
    await chrome.storage.sync.set({ token: Cookies.get("jwt") });
  }
  if (Cookies.get("email")) {
    await chrome.storage.sync.set({ email: Cookies.get("email") });
  }

}

main();

const fetchNews = async (articleLink: string) => {
  const token: any = await chrome.storage.sync.get(["token"]);

  const { Readability } = require("@mozilla/readability");
  const doc = document.cloneNode(true);
  let article = new Readability(doc).parse();

  const headline = article.title;
  const content = article.textContent;

  const news = {
    headline: headline,
    content: content,
  };
  const res1 = await fetch(backendURL + "/api/headlines/get-rhyming", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.token,
    },
    body: JSON.stringify({
      headline: news.headline,
      link: articleLink,
      override: false,
    }),
  });

  if (res1.status === 401) {
    await chrome.storage.sync.clear();
    window.location.reload();
  }

  const rhymingHeadline = await res1.json();

  const res2 = await fetch(backendURL + "/api/bias", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.token,
    },
    body: JSON.stringify({
      content: news.content,
      link: articleLink,
    }),
  });

  if (res2.status === 401) {
    await chrome.storage.sync.clear();
    window.location.reload();
  }

  const biasSummary = await res2.json();

  return {
    headline: news.headline,
    rhymingHeadline: rhymingHeadline,
    biasSummary: biasSummary,
    articleLink: articleLink,
  };
};

const uploadNews = async (news: any) => {
  try {
    const token: any = await chrome.storage.sync.get(["token"]);
    const email = await chrome.storage.sync.get(["email"]);
    let res = await fetch(backendURL + "/api/mongodb/push-user-news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        headline: news.headline,
        rhyme: news.rhymingHeadline,
        bias: news.biasSummary,
        link: news.articleLink,
        email: email.email,
      }),
    });

    if (res.status === 401) {
      await chrome.storage.sync.clear();
      window.location.reload();
    }
    res = await fetch(backendURL + "/api/mongodb/push-news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        headline: news.headline,
        rhyme: news.rhymingHeadline,
        bias: news.biasSummary,
        link: news.articleLink,
      }),
    });

    if (res.status === 401) {
      await chrome.storage.sync.clear();
      window.location.reload();
    }

    res = await fetch(backendURL + "/api/pinecone/upsert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        headline: news.headline,
        rhyme: news.rhymingHeadline,
        link: news.articleLink,
      }),
    });

    if (res.status === 401) {
      await chrome.storage.sync.clear();
      window.location.reload();
    }
  } catch (err) {
    console.log(err);
  }
};

export {};
