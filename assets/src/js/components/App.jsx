import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage.js";

const App = () => {
  return (
    <Router>
      <HomePage />
    </Router>
  );
};

export default App;
