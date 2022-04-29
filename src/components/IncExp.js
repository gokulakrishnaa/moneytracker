import React, { useContext } from "react";
import { GlobalContext } from "../ReactContext.js";
import "../css/incexp.css";

export function IncExp() {
  const { transactions } = useContext(GlobalContext);
  const money = transactions.map((transaction) => transaction.amount);
  const income = money
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc = acc + item), 0)
    .toFixed(2);
  const expense = (
    money
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc = acc + item), 0) * -1
  ).toFixed(2);
  return (
    <div className="incexp">
      <div>
        <h3 className="incexpdiv">Income : </h3>
        <h2 className="incexpdiv">₹ {income}</h2>
      </div>
      <div>
        <h3 className="incexpdiv">Expense : </h3>
        <h2 className="incexpdiv">₹ {expense}</h2>
      </div>
    </div>
  );
}
