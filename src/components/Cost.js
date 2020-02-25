import React, { useState, useContext } from "react";
import BudgetContext from "../context/budgetContext";

const Cost = props => {
  const { id, description, category, value, editState } = props.cost;
  const budgetContext = useContext(BudgetContext);
  const { deleteCost, editCostToggle, costUpdate } = budgetContext;

  const [newCostValue, setNewCostValue] = useState({
    value: ""
  });

  const onDelete = () => {
    if (window.confirm("Are you sure?")) {
      deleteCost(id);
    }
  };

  const onClick = () => {
    editCostToggle(id);
    setNewCostValue({ value: "" });
  };

  const onChange = e => {
    setNewCostValue({
      value: e.target.value
    });
  };

  const updateCost = () => {
    if (newCostValue.value) {
      costUpdate(id, parseFloat(newCostValue.value));
      editCostToggle(id);
    }
  };

  return (
    <div className="card card-cost">
      <h3 className="cost__title">{description}</h3>
      <p className={`cost__category ${category.toLowerCase()}`}>{category}</p>
      <p className="cost__value">-{value.toFixed(2)}</p>
      {!editState ? (
        <div className="cost__btns">
          <div className="cost__edit" onClick={onClick}></div>

          <div className="cost__delete " onClick={onDelete}>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      ) : (
        <div className="cost-edit-group">
          <input
            type="number"
            value={newCostValue.value}
            onChange={onChange}
            className="income-input"
          />
          <button className="accept" onClick={updateCost}></button>
          <button className="cancel" onClick={onClick}></button>
        </div>
      )}
    </div>
  );
};

export default Cost;
