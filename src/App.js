import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance.js";
import { IncExp } from "./components/IncExp.js";
import { TransactionData } from "./components/TransactionData.js";
import { AddTransaction } from "./components/AddTransaction.js";
import { LoginPage } from "./components/LoginPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <LoginPage />
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
    </Router>
  );
}

export default App;
