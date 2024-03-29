// import React, { useContext } from "react";
// import { GlobalContext } from "../ReactContext";

// const {
//     currentoperand,
//     previousoperand,
//     operation
//   } = useContext(GlobalContext);

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "GET_PREVTRANSACTIONS":
      return {
        ...state,
        prevtransactions: action.payload,
      };
    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "SET_USER":
      return {
        ...state,
        userId: action.payload,
      };
    // Calculator functions
    case "ADD_DIGIT":
      if (state.overwrite) {
        return {
          ...state,
          currentoperand: action.payload,
          overwrite: false,
        };
      }
      if (action.payload === "0" && state.currentoperand === "0") return state;
      if (action.payload === "." && state.currentoperand.includes("."))
        return state;
      return {
        ...state,
        currentoperand: `${state.currentoperand || ""}${action.payload}`,
      };
    case "CHOOSE_OP":
      if (state.currentoperand == null && state.previousoperand == null)
        return state;
      if (state.currentoperand == null) {
        return {
          ...state,
          operation: action.payload,
        };
      }
      if (state.previousoperand === null) {
        return {
          ...state,
          previousoperand: state.currentoperand,
          operation: action.payload,
          currentoperand: null,
        };
      }
      return {
        ...state,
        previousoperand: evaluate(state),
        operation: action.payload,
        currentoperand: null,
      };
    case "CLEAR":
      return {
        ...state,
        currentoperand: null,
        previousoperand: null,
        operation: null,
      };
    case "EQUAL":
      if (
        state.operation == null ||
        state.currentoperand == null ||
        state.previousoperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        currentoperand: evaluate(state),
        previousoperand: null,
        operation: null,
      };
    case "DELETE":
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentoperand: null,
        };
      }
      if (state.currentoperand == null) return state;
      if (state.currentoperand.length === 1) {
        return {
          ...state,
          currentoperand: null,
        };
      }
      return {
        ...state,
        currentoperand: state.currentoperand.slice(0, -1),
      };
    default:
      return state;
  }
};

function evaluate({ previousoperand, currentoperand, operation }) {
  const prev = parseFloat(previousoperand);
  const current = parseFloat(currentoperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let calculation = "";
  // eslint-disable-next-line
  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "*":
      calculation = prev * current;
      break;
    case "/":
      calculation = prev / current;
      break;
  }
  return calculation.toString();
}
