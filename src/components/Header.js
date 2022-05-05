import React from "react";
import "../css/header.css";
import { useHistory } from "react-router-dom";

export function Header() {
  const history = useHistory();
  const name = localStorage.getItem("Name");
  const signOut = () => {
    localStorage.removeItem("Id");
    localStorage.removeItem("Name");
    localStorage.removeItem("currentmonth");
    localStorage.removeItem("currentyear");
    history.push("/");
  };
  return (
    <div className="header">
      <p className="title">Expense Tracker</p>
      <p className="headername">Hello, {name} :)</p>
      <button className="signOutButton" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}
