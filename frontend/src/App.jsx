import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdatePage from "./pages/UpdatePage";
import ResponsiveBar from "./components/ResponsiveBar";
import EmployerDetailPage from "./pages/EmployerDetailPage";
const App = () => {
  return (
    <Router>
      <ResponsiveBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/employer/:id/edit" element={<UpdatePage />} />
        <Route exact path="/employer/:id" element={<EmployerDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
export default App;
