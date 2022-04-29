import React, { useContext } from "react";
import { GlobalContext } from "../ReactContext.js";
import "../css/balance.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export function Balance() {
  const { transactions } = useContext(GlobalContext);
  const money = transactions.map((transaction) => transaction.amount);
  const total = money.reduce((acc, item) => (acc = acc + item), 0).toFixed(2);

  // useEffect(() => {
  //   userId();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="balance">
      <div className="baltitle">
        <AccountBalanceWalletIcon />
        <h2>Balance :</h2>
      </div>
      <h1 className="baldiv">₹ {total}</h1>
    </div>
  );
}
