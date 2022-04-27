import React, { useContext } from "react";
import { GlobalContext } from "../ReactContext";
import { Transaction } from "./Transaction.js";

export function TransactionData() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transactiondata">
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
