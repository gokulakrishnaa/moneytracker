import React, { useState, useContext } from "react";
import "../css/addtransaction.css";
import { GlobalContext } from "../ReactContext";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

export function AddTransaction() {
  const [remark, setRemark] = useState("");
  const [amount, setAmount] = useState(0);
  const [choice, setChoice] = useState("");
  const [date, setDate] = useState(new Date());

  const { addTransactions, getTransactions } = useContext(GlobalContext);

  const userId = localStorage.getItem("Id");

  const onSubmit = (add) => {
    add.preventDefault();

    const amtStatus = () => {
      return choice === "Income" ? "Credited" : "Debited";
    };

    const sign = () => {
      return choice === "Income" ? "+" : "-";
    };

    const newTransaction = {
      userId: userId,
      remark: remark,
      amount: +`${sign()}${amount}`,
      status: amtStatus(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    console.log(newTransaction);
    addTransactions(newTransaction);
    getTransactions(userId);
  };

  return (
    <div className="addtransaction">
      <h2>New Transaction : </h2>
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
          <div className="datepick">
            <DatePicker
              views={["year", "month"]}
              minDate={new Date("2020-03-01")}
              maxDate={new Date("2025-06-01")}
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={null}
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                />
              )}
            />
          </div>
        </div>
        <select
          className="dropdownadd"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="Salary">Salary</option>
          <option value="Rent">Rent</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Movies">Movies</option>
          <option value="Current Bill">Current Bill</option>
          <option value="Interest">Interest</option>
          <option value="Transfer">Transfer</option>
          <option value="Fuel">Fuel</option>
          <option value="Others">Others</option>
        </select>
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder=" Enter amount"
          className="textaddtran"
        />
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}
