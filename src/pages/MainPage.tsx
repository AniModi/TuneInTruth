import React, { useEffect, useState } from "react";
import "./MainPage.css";
import { TailSpin } from "react-loader-spinner";

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


const MainPage: React.FC<MainPageProps> = ({ setPage }) => {
  const [loading, setLoading] = useState(true);
  const [articleLink, setArticleLink] = useState<string>("");
  const [newsArticle, setNewsArticle] = useState<NewsArticle | null>(null);

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
    }

    checkToken();
  }, [setPage]);

  async function processArticle() {
    setLoading(true);
    const token: any = await chrome.storage.sync.get(["token"]);
    const res = await fetch("https://simple-backend-0b6s.onrender.com/api/news-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        url: articleLink,
      }),
    });
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

    setNewsArticle({
      id: news.id,
      headline: news.headline,
      rhymingHeadline: rhymingHeadline,
      biasSummary: biasSummary,
      articleLink: articleLink,
    });

    setLoading(false);
  }

  return (
    <div className="news-article-container">
      <label htmlFor="articleLink">Enter Article Link:</label>
      <input
        type="text"
        id="articleLink"
        value={articleLink}
        onChange={(e) => setArticleLink(e.target.value)}
      />
      <button onClick={processArticle}>Process Article</button>
      {loading && (
        <div className="spinner">
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {newsArticle && (
        <>
          <h2>Article Information</h2>
          <div className="article-info">
            <p>
              <strong>Rhyming Headline:</strong> {newsArticle.rhymingHeadline}
            </p>
            <p>
              <strong>Original Headline:</strong> {newsArticle.headline}
            </p>
            <p>
              <strong>Bias:</strong> {newsArticle.biasSummary}
            </p>
            <p>
              <strong>Article Link:</strong>{" "}
              <a
                href={newsArticle.articleLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {newsArticle.articleLink}
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default MainPage;
