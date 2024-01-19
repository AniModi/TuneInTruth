import { createSpinner } from "./utils/createSpinner";
const backendURL = 'https://simple-backend-0b6s.onrender.com';

async function fun() {
  try {
    createSpinner();
    const matches = [];

    

    const res = await fetchNews(window.location.href);

    await uploadNews(res);

    const text = res.headline;
    const text2 = `"${res.headline}"`
    const text3 = res.headline.substring(0, res.headline.length - 1);
    

    for (const div of document.querySelectorAll('*')) {
      if ((div.tagName === 'H1')&& (div as HTMLElement).innerText && ((div as HTMLElement).innerText === text || (div as HTMLElement).innerText === text2 || (div as HTMLElement).innerText === text3)) {
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

function main() {
  chrome.storage.onChanged.addListener(async function (
    changes: { [key: string]: chrome.storage.StorageChange },
    areaName: string
  ) {
    if (changes["action"]?.newValue && !document.hidden) {      
      fun();
    }
  });
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
  const res1 = await fetch(
    backendURL + "/api/rhyme",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        headline: news.headline,
      }),
    }
  );

  const rhymingHeadline = await res1.json();

  const res2 = await fetch(
    backendURL + "/api/bias",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        content: news.content,
      }),
    }
  );

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
    await fetch(backendURL + "/api/upload-news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        headline: news.headline,
        rhymingHeadline: news.rhymingHeadline,
        bias: news.biasSummary,
        link: news.articleLink,
        email: email.email,
      }),
    });
  } catch (err) {
    console.log(err);
  }
};

export {};
