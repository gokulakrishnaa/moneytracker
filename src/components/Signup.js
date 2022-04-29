import "../css/signup.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    const newUser = {
      email,
      firstname,
      lastname,
      password,
    };

    fetch("http://localhost:8000/api/exptrack/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/"));
  };

  return (
    <div className="signupPage">
      <div className="header">
        <p className="title">Expense Tracker</p>
      </div>
      <div className="signupContainer">
        <div className="signupLeft">
          <h1>Sign Up</h1>
          <input
            type="text"
            value={email}
            onChange={(em) => setEmail(em.target.value)}
            placeholder="Enter Email ID"
            className="textfieldsignup"
          />
          <input
            type="text"
            value={firstname}
            onChange={(fname) => setFirstname(fname.target.value)}
            placeholder="Enter First Name"
            className="textfieldsignup"
          />
          <input
            type="text"
            value={lastname}
            onChange={(lname) => setLastname(lname.target.value)}
            placeholder="Enter Last Name"
            className="textfieldsignup"
          />
          <input
            type="password"
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
            placeholder="Enter Password"
            className="textfieldsignup"
          />
          <button className="signButton" onClick={addUser}>
            Register User
          </button>
          <button className="signButton" onClick={() => history.push("/")}>
            Back
          </button>
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
