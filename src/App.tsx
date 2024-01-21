import { useState } from "react";
import "./App.css";
import LoginComponent from "./pages/LoginComponent";
import MainPage from "./pages/MainPage";

function App() {
  const [page, setPage] = useState(1);
  return (
    <>
      {page === 0 ? (
        <MainPage setPage={setPage}></MainPage>
      ) : (
        <LoginComponent setPage={setPage}></LoginComponent>
      )}
    </>
  );
}

export default App;
