import React from "react";
import "./css/main.css";
import BudgetState from "./context/BudgetState";
import App from "./App";

const AppWrapper = () => {
  return (
    <BudgetState>
      <App />
    </BudgetState>
  );
};

export default AppWrapper;
