import React, { useEffect, useState } from "react";
import "./MainPage.css";
import { Grid } from "react-loader-spinner";

interface MainPageProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface NewsArticle {
  id: number;
  headline: string;
  rhymingHeadline: string;
  biasSummary: string;
  articleLink: string;
}

// ...

const MainPage: React.FC<MainPageProps> = ({ setPage }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function checkToken() {
      const token: any = await chrome.storage.sync.get(["token"]);
      if (!token) {
        setPage(1);
        return;
      }

      const res = await fetch(
        "https://simple-backend-0b6s.onrender.com/api/auth/is-authenticated",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token.token,
          },
        }
      );

      const auth = (await res.json()).auth;

      if (!auth) {
        setPage(1);
        return;
      }

      setIsLoggedin(true);
    }

    checkToken();
  }, [setPage, setIsLoggedin]);

  useEffect(() => {
    const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));
    async function getNews() {
      alert("It may take a few minutes to load the news articles due to rate limits. Please be patient.")
      const token: any = await chrome.storage.sync.get(["token"]);
      const res = await fetch(
        "https://simple-backend-0b6s.onrender.com/api/news",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token.token,
          },
        }
      );

      const news = await res.json();
      for (let i = 0; i < news.length; i++) {
        if (i !== 0) await delay(30000);
        const res1 = await fetch(
          "https://simple-backend-0b6s.onrender.com/api/rhyme",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token.token,
            },
            body: JSON.stringify({
              headline: news[i].headline,
            }),
          }
        );

        const rhymingHeadline = await res1.json();
        await delay(30000);


        const res2 = await fetch(
          "https://simple-backend-0b6s.onrender.com/api/bias",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token.token,
            },
            body: JSON.stringify({
              content: news[i].content,
            }),
          }
        );
        const biasSummary = await res2.json();

        setNewsArticles((prev) => {
          return [
            ...prev,
            {
              id: news[i].id,
              headline: news[i].headline,
              rhymingHeadline: rhymingHeadline,
              biasSummary: biasSummary,
              articleLink: news[i].link,
            },
          ];
        });
      }
      setLoading(false);
    }
    if (isLoggedin) getNews();
  }, [isLoggedin]);

  return (
    <div className="main-page-container">
      <div className="news-container">
        {newsArticles.map((article) => (
          <div key={article.id} className="news-card">
            <h2>{article.rhymingHeadline}</h2>
            <p className="rhyming-headline">{article.headline}</p>
            <p className="bias-summary">{article.biasSummary}</p>
            <a
              href={article.articleLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Article
            </a>
          </div>
        ))}
      </div>
        {loading && <Grid></Grid>}
    </div>
  );
};

export default MainPage;
