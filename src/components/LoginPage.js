import React, { useState } from "react";
import "../css/loginpage.css";
import { useHistory } from "react-router-dom";

export function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const signIn = () => {
    const credentials = {
      email,
      password,
    };

    fetch("http://localhost:8000/api/exptrack/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((details) => {
        if (details.message === "Login Successful") {
          localStorage.setItem("Id", details.user._id);
          localStorage.setItem("Name", details.user.firstname);
          history.push("/home");
        } else {
          setErrMsg("Invalid Credentials");
        }
      });
  };

  return (
    <div className="loginpage">
      <div className="header">
        <p className="title">Expense Tracker</p>
      </div>
      <div className="loginContainer">
        <h1>Sign In</h1>
        <h5>E-Mail</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={signIn} className="signinButton">
          Sign In
        </button>
        {errMsg}
        <button
          onClick={() => history.push("/signup")}
          className="signupButton"
        >
          Sign Up for Free
        </button>
      </div>
    </div>
  );
}
