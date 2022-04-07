import React, { useState, useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import { makeStyles } from "@mui/styles";
import { Container, Typography, TextField, Button, Stack } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import EmployerFinder from "../apis/EmployerFinder";

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
const Register = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const { addEmployer } = useContext(GlobalContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await EmployerFinder.post("/", {
        first_name: firstName,
        last_name: lastName,
        date_of_birth: birthDate,
      });
      console.log(response.data);
      addEmployer(response.data.data.employer);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
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
            Sign Up to App
          </Typography>
        </div>
        <div className={classes.item}>
          <TextField
            id="standard-basic"
            label="First Name"
            size="small"
            style={{ width: "100%" }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={classes.item}>
          <TextField
            id="standard-basic"
            label="Last Name"
            size="small"
            style={{ width: "100%" }}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className={classes.item}>
          <Stack noValidate spacing={3}>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Stack>
        </div>

        <div className={classes.button}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
        <div className={classes.text}>
          <Typography variant="h6" paragraph={true} gutterBottom>
            If you have already account <Link to="/login"> Login here</Link>
          </Typography>
        </div>
      </form>
    </Container>
  );
};

export default Register;
