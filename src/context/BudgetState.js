import React, { useReducer } from "react";
import BudgetContext from "./budgetContext";
import budgetReducer from "./budgetReducer";
import uuid from "react-uuid";
import {
  DELETE_COST,
  ADD_COST,
  UPDATE_BALANCE,
  TOGGLE_INCOME_EDIT,
  INCOME_UPDATE,
  EDIT_COST_TOGGLE,
  COST_UPDATE
} from "./types";

const BudgetState = props => {
  const initialState = {
    costs: [
      {
        id: "1001",
        description: "Example Cost: Mortgage",
        category: "Bills",
        value: 505.3,
        editState: false
      },
      {
        id: "1002",
        description: "Example Cost: Home Insurance",
        category: "Insurance",
        value: 12.35,
        editState: false
      },
      {
        id: "1003",
        description: "Example Cost: Council Tax",
        category: "Other",
        value: 147.0,
        editState: false
      }
    ],
    income: 2000,
    remainingBalance: 0,
    editIncome: false
  };

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const addCost = cost => {
    cost.id = uuid();
    dispatch({ type: ADD_COST, payload: cost });
  };

  const deleteCost = id => {
    dispatch({ type: DELETE_COST, payload: id });
  };

  const updateBalance = () => {
    dispatch({ type: UPDATE_BALANCE });
  };

  const editIncomeToggle = () => {
    dispatch({ type: TOGGLE_INCOME_EDIT });
  };

  const incomeUpdate = val => {
    dispatch({ type: INCOME_UPDATE, payload: val });
  };

  const editCostToggle = id => {
    dispatch({ type: EDIT_COST_TOGGLE, payload: id });
  };

  const costUpdate = (id, value) => {
    dispatch({ type: COST_UPDATE, payload: { id: id, value: value } });
  };

  return (
    <BudgetContext.Provider
      value={{
        costs: state.costs,
        income: state.income,
        remainingBalance: state.remainingBalance,
        darkMode: state.darkMode,
        gridView: state.gridView,
        editIncome: state.editIncome,
        deleteCost,
        addCost,
        updateBalance,
        editIncomeToggle,
        incomeUpdate,
        editCostToggle,
        costUpdate
      }}
    >
      {props.children}
    </BudgetContext.Provider>
  );
};

export default BudgetState;
