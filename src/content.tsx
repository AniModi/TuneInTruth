import Cookies from "js-cookie";
import axios from "axios";
import { createSpinner } from "./utils/createSpinner";
import { getTitle, getTitleTag } from "./utils/processTitle";
import { extractBody } from "./utils/processBody";

const backendURL = "https://tuneintruth-2.vercel.app";

const axiosInstance = axios.create({
  timeout: 120000,
});

async function fun() {
  try {
    createSpinner();

    const div = getTitleTag();
    const res = await fetchNews(window.location.href);

    div.innerHTML = res.rhymingHeadline;
    const div1 = document.createElement("div");
    div1.style.padding = "10px 0";
    div1.style.lineHeight = "1.5";
    div1.style.fontSize = "16px";
    div1.innerHTML = "<b>Bias report : </b>" + res.biasSummary;
    div.append(div1);
    await uploadNews(res);
  } finally {
    const spinner = document.getElementById("mySpinner");
    if (!spinner) return;
    spinner.parentNode?.removeChild(spinner);
    document.body.style.overflow = "auto";
  }
}

async function main() {
  chrome.storage.onChanged.addListener(async function (changes: {
    [key: string]: chrome.storage.StorageChange;
  }) {
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

  const headline = getTitle();
  const content = extractBody();
  const news = {
    headline: headline,
    content: content,
  };

  try {
    const res1 = await axiosInstance.post(
      backendURL + "/api/headlines/get-rhyming",
      {
        headline: news.headline,
        link: articleLink,
        override: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.token,
        },
      }
    );

    if (res1.status === 401) {
      await chrome.storage.sync.clear();
      window.location.reload();
    }

    const rhymingHeadline = res1.data;

    const res2 = await axiosInstance.post(
      backendURL + "/api/bias",
      {
        content: news.content,
        link: articleLink,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.token,
        },
      }
    );

    if (res2.status === 401) {
      await chrome.storage.sync.clear();
      window.location.reload();
    }

    const biasSummary = res2.data;

    return {
      headline: news.headline,
      rhymingHeadline: rhymingHeadline,
      biasSummary: biasSummary,
      articleLink: articleLink,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const uploadNews = async (news: any) => {
  try {
    const token: any = await chrome.storage.sync.get(["token"]);
    const email = await chrome.storage.sync.get(["email"]);

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.token,
    };

    let res = await axiosInstance.post(
      backendURL + "/api/mongodb/push-user-news",
      {
        headline: news.headline,
        rhyme: news.rhymingHeadline,
        bias: news.biasSummary,
        link: news.articleLink,
        email: email.email,
      },
      { headers }
    );

    if (res.status === 401) {
      await chrome.storage.sync.clear();
      window.location.reload();
    }

    res = await axiosInstance.post(
      backendURL + "/api/mongodb/push-news",
      {
        headline: news.headline,
        rhyme: news.rhymingHeadline,
        bias: news.biasSummary,
        link: news.articleLink,
      },
      { headers }
    );

    if (res.status === 401) {
      await chrome.storage.sync.clear();
      window.location.reload();
    }

    res = await axiosInstance.post(
      backendURL + "/api/pinecone/upsert",
      {
        headline: news.headline,
        rhyme: news.rhymingHeadline,
        link: news.articleLink,
      },
      { headers }
    );

    if (res.status === 401) {
      await chrome.storage.sync.clear();
      window.location.reload();
    }
  } catch (err) {
    console.error(err);
  }
};

export {};
