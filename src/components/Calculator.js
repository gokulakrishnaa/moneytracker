import React, { useContext } from "react";
import { GlobalContext } from "../ReactContext";
import "../css/calculator.css";

export function Calculator() {
  const {
    currentoperand,
    previousoperand,
    operation,
    addDigit,
    chooseOp,
    clear,
    equal,
    deleteDigit,
  } = useContext(GlobalContext);
  return (
    <div className="calculator-grid">
      <div className="output-area">
        <div className="previous-op">
          {previousoperand} {operation}
        </div>
        <div className="current-op">{currentoperand}</div>
      </div>
      <button className="span-two" onClick={() => clear()}>
        AC
      </button>
      <button onClick={() => deleteDigit()}>DEL</button>
      <button value="/" onClick={(e) => chooseOp(e.target.value)}>
        /
      </button>
      <button value="1" onClick={(e) => addDigit(e.target.value)}>
        1
      </button>
      <button value="2" onClick={(e) => addDigit(e.target.value)}>
        2
      </button>
      <button value="3" onClick={(e) => addDigit(e.target.value)}>
        3
      </button>
      <button value="*" onClick={(e) => chooseOp(e.target.value)}>
        *
      </button>
      <button value="4" onClick={(e) => addDigit(e.target.value)}>
        4
      </button>
      <button value="5" onClick={(e) => addDigit(e.target.value)}>
        5
      </button>
      <button value="6" onClick={(e) => addDigit(e.target.value)}>
        6
      </button>
      <button value="+" onClick={(e) => chooseOp(e.target.value)}>
        +
      </button>
      <button value="7" onClick={(e) => addDigit(e.target.value)}>
        7
      </button>
      <button value="8" onClick={(e) => addDigit(e.target.value)}>
        8
      </button>
      <button value="9" onClick={(e) => addDigit(e.target.value)}>
        9
      </button>
      <button value="-" onClick={(e) => chooseOp(e.target.value)}>
        -
      </button>
      <button value="." onClick={(e) => addDigit(e.target.value)}>
        .
      </button>
      <button value="0" onClick={(e) => addDigit(e.target.value)}>
        0
      </button>
      <button className="span-two" onClick={() => equal()}>
        =
      </button>
    </div>
  );
}
