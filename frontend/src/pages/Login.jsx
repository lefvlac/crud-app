import React, { useState, useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import { makeStyles } from "@mui/styles";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(15),
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  item: {
    paddingTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  text: {
    marginTop: theme.spacing(2),
  },
}));
const Login = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
    navigate(0);
  };
  return (
    <Container className={classes.container}>
      <form
        className={classes.form}
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <div className={classes.title}>
          <Typography variant="h4" gutterBottom>
            Login to App
          </Typography>
        </div>
        <div className={classes.item}>
          <TextField
            id="standard-basic"
            label="Username"
            size="small"
            style={{ width: "100%" }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={classes.item}>
          <TextField
            id="standard-basic"
            label="Password"
            size="small"
            style={{ width: "100%" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={classes.button}>
          <Button variant="contained" onClick={ctx.onLogin}>
            Submit
          </Button>
        </div>
        <div className={classes.text}>
          <Typography variant="h6" paragraph={true} gutterBottom>
            If you have no account <Link to="/register"> Register here</Link>
          </Typography>
        </div>
      </form>
    </Container>
  );
};

export default Login;
