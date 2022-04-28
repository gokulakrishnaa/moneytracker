import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer.js";

const initialState = {
  transactions: [],
  // userId: "",
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
  async function getTransactions(userId) {
    const transaction_data = await fetch(
      `${API_URL}/api/exptrack/${userId}`
    ).then((data) => data.json());

    dispatch({
      type: "GET_TRANSACTIONS",
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

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        addTransactions,
        // userId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
