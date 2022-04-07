import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { GlobalContext } from "../store/GlobalState";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    justfyContent: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
      textDecoration: "none",
    },
  },
}));
const ResponsiveBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ctx = useContext(GlobalContext);

  return (
    <AppBar position="relative">
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            {!ctx.isLoggedIn && (
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            )}
            <Link to="/register" className={classes.link}>
              Register
            </Link>
            {ctx.isLoggedIn && (
              <Link to="/settings" className={classes.link}>
                Settings
              </Link>
            )}
            {ctx.isLoggedIn && (
              <Button variant="contained" onClick={ctx.onLogout}>
                Logout
              </Button>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveBar;
