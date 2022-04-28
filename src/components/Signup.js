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
    <div className="signup-container">
      <h1>Sign Up</h1>
      <div className="signup-credentials">
        <input
          type="text"
          value={email}
          onChange={(em) => setEmail(em.target.value)}
          placeholder="Enter Email ID"
        />
        <input
          type="text"
          value={firstname}
          onChange={(fname) => setFirstname(fname.target.value)}
          placeholder="Enter First Name"
        />
        <input
          type="text"
          value={lastname}
          onChange={(lname) => setLastname(lname.target.value)}
          placeholder="Enter Last Name"
        />
        <input
          type="password"
          value={password}
          onChange={(pass) => setPassword(pass.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={addUser}>Register User</button>
        <button onClick={() => history.push("/")}>Back</button>
      </div>
    </div>
  );
}
