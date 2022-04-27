import React, { useContext } from "react";
import { GlobalContext } from "../ReactContext.js";

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
        <h4>Income</h4>
        <p className="plus">₹ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="plus">₹ {expense}</p>
      </div>
    </div>
  );
}
