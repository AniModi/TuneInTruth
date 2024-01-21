import React from "react";
import "./MainPage.css";

interface MainPageProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}



const MainPage: React.FC<MainPageProps> = () => {

  async function processArticle() {
    chrome.storage.local.set({ action: true }, function () {
      chrome.storage.local.set({ action: false }, function () {});
    });
  }

  return (
    <div className="news-article-container">
      <button onClick={processArticle}>Process Article</button>
      <a href = "https://tuneintruth-next.vercel.app" target="_blank" rel="noreferrer">Go to Website</a>
    </div>
  );
};
export default MainPage;
