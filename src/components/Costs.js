import React, { useContext } from "react";
import BudgetContext from "../context/budgetContext";

import Cost from "./Cost";

const Costs = props => {
  const budgetContext = useContext(BudgetContext);
  const { costs } = budgetContext;
  const { gridView } = props;

  console.log(gridView);

  return (
    <div
      className={"cost-container" + (gridView ? " cost-container--grid" : "")}
    >
      {costs.map(cost => (
        <Cost cost={cost} key={cost.id} />
      ))}
    </div>
  );
};

export default Costs;
