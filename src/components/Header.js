import React from "react";
import "../css/header.css";
import { useHistory } from "react-router-dom";
// import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
// import Badge from "@mui/material/Badge";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
// import { GlobalContext } from "../ReactContext";

export function Header() {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [notification, setNotification] = useState("");

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  // const { transactions } = useContext(GlobalContext);
  // const handleNotify = () => {
  //   transactions
  //     .filter((transaction) => transaction.remark === "Salary")
  //     .map((data) => setNotification(data.remark));
  // };

  // useEffect(() => {
  //   handleNotify();
  //   console.log(notification);
  //   // eslint-disable-next-line
  // }, []);

  const history = useHistory();
  const name = localStorage.getItem("Name");
  const signOut = () => {
    localStorage.removeItem("Id");
    localStorage.removeItem("Name");
    localStorage.removeItem("currentmonth");
    localStorage.removeItem("currentyear");
    history.push("/");
  };
  return (
    <div className="header">
      <p className="title">Expense Tracker</p>
      <p className="headername">Hello, {name} :)</p>
      {/* <p className="notify">
        <Badge badgeContent={notification !== "Salary" ? 1 : 0} color="primary">
          <NotificationsActiveOutlinedIcon
            style={{ color: "white" }}
            fontSize="large"
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography
              sx={{ p: 1, fontFamily: "Montserrat,sans-serif", fontSize: 12 }}
            >
              {notification !== "Salary"
                ? "Salary has to be added"
                : "No new notifications"}
            </Typography>
          </Popover>
        </Badge>
      </p> */}
      <button className="signOutButton" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}
