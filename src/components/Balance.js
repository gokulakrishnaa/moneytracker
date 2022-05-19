import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../ReactContext.js";
import "../css/balance.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart } from "chart.js/auto";

export function Balance() {
  const {
    transactions,
    prevtransactions,
    getPrevTransactions,
    getTransactions,
  } = useContext(GlobalContext);
  const userId = localStorage.getItem("Id");
  const month = localStorage.getItem("currentmonth");
  const prevmonth = parseInt(month) - 1;
  const year = localStorage.getItem("currentyear");

  useEffect(() => {
    getPrevTransactions(userId, year, prevmonth);
    // eslint-disable-next-line
  }, [year, prevmonth, userId]);

  useEffect(() => {
    getTransactions(userId, year, month);
    // eslint-disable-next-line
  }, [year, month, userId]);

  const money = transactions.map((transaction) => transaction.amount);
  const total = money.reduce((acc, item) => (acc = acc + item), 0).toFixed(2);
  const prevmoney = prevtransactions.map((transaction) => transaction.amount);
  const prevtotal = prevmoney
    .reduce((acc, item) => (acc = acc + item), 0)
    .toFixed(2);

  const Barchart = () => {
    return (
      <Bar
        data={{
          labels: ["Previous Month", "Current Month"],
          datasets: [
            {
              label: "Comparison of 2 Month's Balance",
              data: [prevtotal, total],
              backgroundColor: ["green", "darkGreen"],
              barThickness: 80,
            },
          ],
        }}
        height={200}
        width={500}
        options={{
          maintainAspectRatio: false,
        }}
      />
    );
  };

  return (
    <div className="balance">
      <div className="bal-top">
        <div className="baltitle">
          <AccountBalanceWalletIcon />
          <h2>Balance :</h2>
        </div>
        <h1 className="baldiv">₹ {total}</h1>
      </div>
      <div className="barchart-bottom">
        <Barchart />
      </div>
    </div>
  );
}
