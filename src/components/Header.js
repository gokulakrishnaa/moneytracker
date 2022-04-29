import React from "react";
import "../css/header.css";
import { useHistory } from "react-router-dom";

export function Header() {
  const history = useHistory();
  const signOut = () => {
    localStorage.removeItem("Id");
    localStorage.removeItem("Name");
    history.push("/");
  };
  return (
    <div className="header">
      <p className="title">Expense Tracker</p>
      <button className="signOutButton" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}
