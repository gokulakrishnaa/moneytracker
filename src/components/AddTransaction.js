import React, { useState, useContext } from "react";
import "../css/addtransaction.css";
import { GlobalContext } from "../ReactContext";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const incomeData = [
  "Salary",
  "Savings",
  "House Rent",
  "Gift Voucher",
  "Borrowings",
  "Interest",
  "Others",
];

const expenseData = [
  "Rent",
  "Fuel",
  "Food",
  "Current Bill",
  "Movies",
  "Travel",
  "Shopping",
  "Fund Transfer",
  "Others",
];

export function AddTransaction() {
  const [remark, setRemark] = useState("");
  const [amount, setAmount] = useState(0);
  const [choice, setChoice] = useState("");
  const [date, setDate] = useState(new Date());
  const [dmsg, setDmsg] = useState("");

  const { addTransactions, getTransactions } = useContext(GlobalContext);

  const userId = localStorage.getItem("Id");
  const month = localStorage.getItem("currentmonth");
  const year = localStorage.getItem("currentyear");

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
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    addTransactions(newTransaction);
    getTransactions(userId, year, month);
    setDmsg("Transaction added Successfully !!");
    // setRemark("");
    // setAmount("");
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
              views={["year", "month", "day"]}
              minDate={new Date("2020-03-01")}
              maxDate={new Date("2025-06-01")}
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
                localStorage.setItem("currentmonth", newValue.getMonth() + 1);
                localStorage.setItem("currentyear", newValue.getFullYear());
                getTransactions(userId, year, month);
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
          {choice === "Income"
            ? incomeData.map((data) => <option value={data}>{data}</option>)
            : expenseData.map((data) => <option value={data}>{data}</option>)}
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
        <p className="dmsg">{dmsg}</p>
      </form>
    </div>
  );
}
