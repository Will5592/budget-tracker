import React, { useState, useContext } from "react";
import BudgetContext from "../context/budgetContext";

const BudgetInfo = () => {
  const budgetContext = useContext(BudgetContext);
  const {
    income,
    remainingBalance,
    editIncome,
    editIncomeToggle,
    incomeUpdate
  } = budgetContext;

  const [newIncome, setNewIncome] = useState({
    value: ""
  });

  const onChange = e => {
    setNewIncome({
      value: e.target.value
    });
  };

  const editOnClick = () => {
    editIncomeToggle();
    setNewIncome({ value: "" });
  };

  const editOnClickUpdate = () => {
    incomeUpdate(newIncome.value);
    editIncomeToggle();
  };

  return (
    <div className="budget-info">
      <div className="card card-info card-income">
        <h4 className="card-info__title">Household Income</h4>
        <p>Total (net):</p>
        <p className="card-income__income">£{income}</p>
        {!editIncome ? (
          <button className="edit" onClick={editOnClick}></button>
        ) : (
          <div className="edit-group">
            <input
              type="number"
              value={newIncome.value}
              onChange={onChange}
              className="income-input"
            />
            <button className="accept" onClick={editOnClickUpdate}></button>
            <button className="cancel" onClick={editOnClick}></button>
          </div>
        )}
      </div>
      <div className="card card-info card-balance">
        <h4 className="card-info__title">Remaining Monthly Balance</h4>
        <p>Net income minus total monthly costs</p>
        <p
          className={
            "card-balance__balance" +
            (remainingBalance <= 0 ? " card-balance__balance--red" : "")
          }
        >
          £{remainingBalance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
export default BudgetInfo;
