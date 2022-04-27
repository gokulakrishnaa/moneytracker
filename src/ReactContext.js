import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer.js";

const initialState = {
  transactions: [],
};

const API_URL = "http://localhost:8000";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    const transaction_data = await fetch(`${API_URL}/api/transaction`).then(
      (data) => data.json()
    );
    console.log(transaction_data);

    dispatch({
      type: "GET_TRANSACTION",
      payload: transaction_data,
    });
  }

  function addTransactions(transaction) {
    fetch(`${API_URL}/api/transaction`, {
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
