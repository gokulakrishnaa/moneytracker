import React, { useState } from "react";
import "../css/loginpage.css";
import { useHistory, Link } from "react-router-dom";

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
        <div className="loginLeft">
          <h1>Sign In</h1>
          <h4>E-Mail</h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="textfield"
          />
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="textfield"
          />
          <br />
          {errMsg}
          <button type="button" onClick={signIn} className="signinButton">
            Sign In
          </button>
          <p className="signupButton">
            New User ?
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="signupLink"> Sign Up for Free</span>
            </Link>
          </p>
        </div>
        <div className="loginRight">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/expense-managing-app-4268368-3561011.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
