import { useState } from "react";
import "./App.css";
import LoginComponent from "./pages/LoginComponent";
import SignupComponent from "./pages/SignupComponent";
import MainPage from "./pages/MainPage";



function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      {page === 0 ? (
        <MainPage setPage = {setPage}></MainPage>
      ) : page === 1 ? (
        <LoginComponent setPage={setPage}></LoginComponent>
      ) : (
        <SignupComponent setPage={setPage}></SignupComponent>
      )}
    </>
  );
}

export default App;
