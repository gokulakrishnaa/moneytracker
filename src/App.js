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
          <div className="main">
            <div className="left">
              <Balance />
              <IncExp />
            </div>
            <div className="middle">
              <img
                className="imghome"
                src="https://cdni.iconscout.com/illustration/premium/thumb/boy-taking-notes-in-online-class-5004573-4211289.png"
                alt=""
              />
            </div>
            <div className="right">
              <TransactionData />
              <AddTransaction />
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
