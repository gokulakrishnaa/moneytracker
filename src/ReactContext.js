import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer.js";

const initialState = {
  transactions: [],
  prevtransactions: [],
  // userId: "",
  currentoperand: "",
  previousoperand: "",
  operation: "",
};

const API_URL = "http://localhost:8000";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // async function userId() {
  //   const userId = localStorage.getItem("Id");
  //   dispatch({
  //     type: "SET_USER",
  //     payload: userId,
  //   });
  // }

  //Actions
  async function getTransactions(userId, year, month) {
    const transaction_data = await fetch(
      `${API_URL}/api/exptrack/${userId}/${year}/${month}`
    ).then((data) => data.json());

    dispatch({
      type: "GET_TRANSACTIONS",
      payload: transaction_data,
    });
  }

  async function getPrevTransactions(userId, year, prevmonth) {
    const transaction_data = await fetch(
      `${API_URL}/api/exptrack/${userId}/${year}/${prevmonth}`
    ).then((data) => data.json());

    dispatch({
      type: "GET_PREVTRANSACTIONS",
      payload: transaction_data,
    });
  }

  function addTransactions(transaction) {
    fetch(`${API_URL}/api/exptrack`, {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: { "Content-Type": "application/json" },
    });

    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  //Calculator Functions

  function addDigit(digit) {
    dispatch({
      type: "ADD_DIGIT",
      payload: digit,
    });
  }

  function chooseOp(operate) {
    dispatch({
      type: "CHOOSE_OP",
      payload: operate,
    });
  }

  function clear() {
    dispatch({
      type: "CLEAR",
      payload: "",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        prevtransactions: state.prevtransactions,
        getPrevTransactions,
        getTransactions,
        addTransactions,
        // userId,
        previousoperand: state.previousoperand,
        currentoperand: state.currentoperand,
        operation: state.operation,
        addDigit,
        chooseOp,
        clear,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
