import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance.js";
import { IncExp } from "./components/IncExp.js";
import { TransactionData } from "./components/TransactionData.js";
import { AddTransaction } from "./components/AddTransaction.js";
import { LoginPage } from "./components/LoginPage.js";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Header />
          <Balance />
          <IncExp />
          <TransactionData />
          <AddTransaction />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
