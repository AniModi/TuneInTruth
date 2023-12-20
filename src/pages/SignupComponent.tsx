import React, { useState } from "react";
import "./SignupComponent.css";

interface MainPageProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SignupComponent: React.FC<MainPageProps> = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e : any) {
    e.preventDefault();
    const res = await fetch("https://simple-backend-0b6s.onrender.com/api/auth/sign-up", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    if(res.status !== 201) {
      alert("Try again");
      return;
    }
    alert("Account created! Please login with token sent to your email once for verification");
    setPage(1);
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <button type="submit" onClick={handleSignup}>Sign Up</button>
        </form>

        <p
          className="toggle-text"
          onClick={() => {
            setPage(1);
          }}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default SignupComponent;
