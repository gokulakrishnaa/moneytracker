import React, { useState, useContext } from "react";
import "../css/addtransaction.css";
import { GlobalContext } from "../ReactContext";

export function AddTransaction() {
  const [remark, setRemark] = useState("");
  const [amount, setAmount] = useState(0);
  const [choice, setChoice] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (add) => {
    add.preventDefault();

    const amtStatus = () => {
      return choice === "Income" ? "Credited" : "Debited";
    };

    const sign = () => {
      return choice === "Income" ? "+" : "-";
    };

    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      remark,
      amount: +`${sign()}${amount}`,
      status: amtStatus(),
    };
    console.log(newTransaction);
    addTransaction(newTransaction);
  };

  return (
    <div className="addtransaction">
      <h3>New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="radio">
          <input
            type="radio"
            name={choice}
            value="Income"
            onChange={(e) => setChoice(e.target.value)}
          />
          <label for="income">Income</label>
          <input
            type="radio"
            className="expradio"
            name={choice}
            value="Expense"
            onChange={(e) => setChoice(e.target.value)}
          />
          <label for="income">Expense</label>
        </div>
        <input
          type="text"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          placeholder="Enter remark"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}