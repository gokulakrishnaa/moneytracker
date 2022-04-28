import React from "react";
import "../css/transaction.css";

export function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div className="tranContainer">
      <li className="tranlist">
        {transaction.remark}
        <span className="status">{transaction.status}</span>
        <span className="amount">
          {sign} ₹{Math.abs(transaction.amount)}
        </span>
      </li>
    </div>
  );
}
