import React, { useContext } from "react";
import { GlobalContext } from "../ReactContext.js";
import "../css/incexp.css";
import { Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart } from "chart.js/auto";

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

  // const prevmoney = prevtransactions.map((transaction) => transaction.amount);
  // const previncome = prevmoney
  //   .filter((item) => item > 0)
  //   .reduce((acc, item) => (acc = acc + item), 0)
  //   .toFixed(2);
  // const prevexpense = (
  //   prevmoney
  //     .filter((item) => item < 0)
  //     .reduce((acc, item) => (acc = acc + item), 0) * -1
  // ).toFixed(2);

  // const Barchart = () => {
  //   return (
  //     <Bar
  //       data={{
  //         labels: ["Previous Month", "Current Month"],
  //         datasets: [
  //           {
  //             label: "Previous",
  //             data: [previncome, income],
  //             backgroundColor: ["green", "darkGreen"],
  //             barThickness: 20,
  //           },
  //           {
  //             label: "Current",
  //             data: [prevexpense, expense],
  //             backgroundColor: ["green", "darkGreen"],
  //             barThickness: 20,
  //           },
  //         ],
  //       }}
  //       height={200}
  //       width={400}
  //       options={{ maintainAspectRatio: false }}
  //     />
  //   );
  // };

  const Doughnutchart = () => {
    return (
      <Doughnut
        data={{
          labels: ["Income", "Expenditure"],
          datasets: [
            {
              label: "Income & Expenditure of Current Month",
              data: [income, expense],
              backgroundColor: ["slateblue", "darkgoldenrod"],
              borderWidth: 0.2,
            },
          ],
        }}
      />
    );
  };

  return (
    <div className="incexp-top">
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
      <div className="linechart-bottom">
        <Doughnutchart />
      </div>
    </div>
  );
}
