import React, { useContext, useEffect } from "react";
import EmployerFinder from "../apis/EmployerFinder";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../store/GlobalState";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import AddEmployer from "../components/AddEmployer";
const useStyles = makeStyles({
  title: {
    alignItems: "center",
  },
});
const Home = () => {
  const classes = useStyles();
  const { employers, setEmployers } = useContext(GlobalContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployerFinder.get("/");
        console.log(response.data.data);
        setEmployers(response.data.data.employers);
      } catch (err) {}
    };
    fetchData();
  }, []);
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await EmployerFinder.delete(`/${id}`);
      setEmployers(
        employers.filter((employer) => {
          return employer.employer_id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (e, id) => {
    e.stopPropagation();
    navigate(`/employer/${id}/edit`);
  };
  const handleEmployerSelect = (id) => {
    navigate(`/employer/${id}`);
  };

  return (
    <>
      <AddEmployer />
      <h3 className={classes.title}>List of Employers</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Birthdate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employers &&
              employers.map((employer) => (
                <TableRow
                  key={employer.employer_id}
                  onClick={() => handleEmployerSelect(employer.employer_id)}
                >
                  <TableCell component="th" scope="row">
                    {employer.employer_id}
                  </TableCell>
                  <TableCell align="left">{employer.first_name}</TableCell>
                  <TableCell align="left">{employer.last_name}</TableCell>
                  <TableCell align="left">{employer.date_of_birth}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={(e) => handleEdit(e, employer.employer_id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={(e) => handleDelete(e, employer.employer_id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
