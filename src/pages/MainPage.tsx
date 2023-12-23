import React, { useEffect } from "react";
import "./MainPage.css";

interface MainPageProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}


const MainPage: React.FC<MainPageProps> = ({ setPage }) => {

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
    chrome.storage.local.set({ action: true }, function () {
      chrome.storage.local.set({ action: false }, function () {});
    });
  }

  return (
    <div className="news-article-container">
      <button onClick={processArticle}>Process Article</button>
      <a href = "https://tuneintruth.netlify.app/" target="_blank" rel="noreferrer">Go to Website</a>
    </div>
  );
};
export default MainPage;
