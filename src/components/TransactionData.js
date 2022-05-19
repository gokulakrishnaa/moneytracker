import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../ReactContext";
// import { Transaction } from "./Transaction.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../css/transactiondata.css";
import * as XLSX from "xlsx";

// export function TransactionData() {
//   const { transactions, getTransactions } = useContext(GlobalContext);
//   const userId = localStorage.getItem("Id");

//   useEffect(() => {
//     getTransactions(userId);
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div className="transactiondata">
//       <h2>Transaction History</h2>
//       <ul className="list">
//         {transactions.map((transaction) => (
//           <Transaction key={transaction.id} transaction={transaction} />
//         ))}
//       </ul>
//     </div>
//   );
// }

export function TransactionData() {
  // const [obj, setObj] = useState({});
  // const[array,setArray] = useState([]);
  const { transactions, getTransactions } = useContext(GlobalContext);
  const userId = localStorage.getItem("Id");
  const month = localStorage.getItem("currentmonth");
  const year = localStorage.getItem("currentyear");

  useEffect(() => {
    getTransactions(userId, year, month);
    // eslint-disable-next-line
  }, [year, month, userId]);

  const handleExport = () => {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(transactions);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
    //console.log(transactions);
  };

  return (
    <div className="transactiondata">
      <h2>Transaction History : </h2>
      <br />
      <div className="table-container">
        <TableContainer sx={{ maxHeight: 260 }} component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{transaction.remark}</TableCell>
                  <TableCell align="left">
                    {transaction.date}/{transaction.month}/{transaction.year}
                  </TableCell>
                  <TableCell align="left">{transaction.status}</TableCell>
                  <TableCell align="left">
                    ₹ {Math.abs(transaction.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <button className="tran-btn" onClick={handleExport}>
          Export
        </button>
      </div>
    </div>
  );
}
