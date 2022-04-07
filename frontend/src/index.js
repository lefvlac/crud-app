import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./store/GlobalState";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </GlobalProvider>
);
