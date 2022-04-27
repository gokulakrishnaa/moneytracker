import React from "react";
import "../css/header.css";

export function Header() {
  return (
    <div className="header">
      <p className="title">Expense Tracker</p>
      <button>Sign out</button>
    </div>
  );
}
