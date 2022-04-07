import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import { Home, Login, AppRegistration, Logout } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
}));
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <Login className={classes.icon} />
        <Typography className={classes.text}>Login</Typography>
      </div>
      <div className={classes.item}>
        <AppRegistration className={classes.icon} />
        <Typography className={classes.text}>Register</Typography>
      </div>
      <div className={classes.item}>
        <Logout className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
