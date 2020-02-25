import React, { useState, useContext, useEffect } from "react";
import Header from "./layout/Header";
import BudgetInfo from "./components/BudgetInfo";
import PaymentForm from "./components/PaymentForm";
import CostToolbar from "./components/CostToolbar";
import Costs from "./components/Costs";

import BudgetContext from "./context/budgetContext";

const App = () => {
  const [darkMode, setDarkMode] = useState({
    darkMode: false
  });

  const toggleDarkMode = () => {
    setDarkMode({ darkMode: !darkMode.darkMode });
  };

  const [gridView, setGridView] = useState({
    gridView: false
  });

  const toggleGridView = () => {
    setGridView({ gridView: !gridView.gridView });
  };

  const budgetContext = useContext(BudgetContext);
  const { updateBalance, costs, income } = budgetContext;

  useEffect(() => {
    updateBalance();
  }, [costs, income]);

  return (
    <>
      <Header darkModeToggle={toggleDarkMode} />
      <main
        className={"main-content" + (darkMode.darkMode ? " dm-active" : "")}
      >
        <div className="wrap content-wrap">
          <BudgetInfo />
          <PaymentForm />
          <CostToolbar
            gridViewToggle={toggleGridView}
            gridView={gridView.gridView}
          />
          <Costs gridView={gridView.gridView} />
        </div>
      </main>
    </>
  );
};

export default App;
