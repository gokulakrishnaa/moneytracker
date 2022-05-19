import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance.js";
import { IncExp } from "./components/IncExp.js";
import { TransactionData } from "./components/TransactionData.js";
import { AddTransaction } from "./components/AddTransaction.js";
import { LoginPage } from "./components/LoginPage.js";
import { Signup } from "./components/Signup";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Calculator } from "./components/Calculator";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalculateIcon from "@mui/icons-material/Calculate";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <div className="area">
          <ul className="circles">
            <Switch>
              <Route exact path="/">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/home">
                <Header />
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    height: 800,
                  }}
                >
                  <div className="tabimg">
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={value}
                      onChange={handleChange}
                      sx={{
                        width: 200,
                        height: 280,
                        p: 1,
                        bgcolor: "rgb(126, 202, 249)",
                      }}
                      aria-label="Vertical tabs example"
                    >
                      <Tab
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 800,
                          fontSize: 18,
                        }}
                        icon={<AccountBalanceWalletIcon />}
                        iconPosition="end"
                        label="Account "
                        {...a11yProps(0)}
                      />
                      <Tab
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 800,
                          fontSize: 18,
                        }}
                        label="Transaction "
                        icon={<AddBoxIcon />}
                        iconPosition="end"
                        {...a11yProps(1)}
                      />
                      <Tab
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 800,
                          fontSize: 18,
                        }}
                        label="Statement "
                        icon={<ListAltIcon />}
                        iconPosition="end"
                        {...a11yProps(2)}
                      />
                      <Tab
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 800,
                          fontSize: 18,
                        }}
                        label="Calculator "
                        icon={<CalculateIcon />}
                        iconPosition="end"
                        {...a11yProps(3)}
                      />
                    </Tabs>
                    <img
                      className="imghome"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/boy-taking-notes-in-online-class-5004573-4211289.png"
                      alt=""
                    />
                  </div>
                  <TabPanel value={value} index={0}>
                    <div>
                      <Balance />
                      <IncExp />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <div>
                      <AddTransaction />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <div>
                      <TransactionData />
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Calculator />
                  </TabPanel>
                </Box>
              </Route>
              {/* <div className="main">
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
              </Route> */}
            </Switch>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default App;
