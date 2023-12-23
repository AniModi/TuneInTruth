function createSpinner() {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;

  document.head.appendChild(styleElement);
  const spinner = document.createElement("div");
  spinner.id = "mySpinner";
  spinner.style.position = "fixed";
  spinner.style.zIndex = "99999";
  spinner.style.height = "50px";
  spinner.style.width = "50px";
  spinner.style.overflow = "show";
  spinner.style.margin = "auto";
  spinner.style.top = "0";
  spinner.style.left = "0";
  spinner.style.bottom = "0";
  spinner.style.right = "0";
  spinner.style.border = "5px solid #f3f3f3";
  spinner.style.borderRadius = "50%";
  spinner.style.borderTop = "5px solid #3498db";
  spinner.style.animation = "spin 1s linear infinite";
  document.body.appendChild(spinner);
  document.body.style.overflow = 'hidden'
}

async function fun() {
  try {
    createSpinner();
    const matches = [];

    const res = await fetchNews(window.location.href);

    await uploadNews(res);

    const text = res.headline;

    for (const div of document.querySelectorAll("*")) {
      if (div.innerHTML && div.innerHTML === text) {
        matches.push(div);

        div.innerHTML = res.rhymingHeadline;

        const div1 = document.createElement("div");
        div1.style.padding = "10px 0";
        div1.style.lineHeight = "1.5";
        div1.style.backgroundColor = "white";
        div1.innerHTML = "<b>Bias report : </b>" + res.biasSummary;
        div.parentElement?.append(div1);
      }
    }
  } finally {
    const spinner = document.getElementById("mySpinner");
    if (!spinner) return;
    spinner.parentNode?.removeChild(spinner);
    document.body.style.overflow = 'auto'
  }
}

function main() {
  chrome.storage.onChanged.addListener(async function (
    changes: { [key: string]: chrome.storage.StorageChange },
    areaName: string
  ) {
    if (changes["action"]?.newValue) {
      fun();
    }
  });
}

main();

const fetchNews = async (articleLink: string) => {
  const token: any = await chrome.storage.sync.get(["token"]);
  const res = await fetch(
    "https://simple-backend-0b6s.onrender.com/api/news-data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        url: articleLink,
      }),
    }
  );
  const news = await res.json();

  const res1 = await fetch(
    "https://simple-backend-0b6s.onrender.com/api/rhyme",
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
    "https://simple-backend-0b6s.onrender.com/api/bias",
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
    await fetch("https://simple-backend-0b6s.onrender.com/api/upload-news", {
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
