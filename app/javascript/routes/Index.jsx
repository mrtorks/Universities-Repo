import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Universities from "../components/Universities";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/universities"
        element={<Universities universities />}
      ></Route>
    </Routes>
  </Router>
);
