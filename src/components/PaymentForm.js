import React, { useState, useContext } from "react";
import BudgetContext from "../context/budgetContext";

const PaymentForm = () => {
  const budgetContext = useContext(BudgetContext);
  const [cost, setCost] = useState({
    description: "",
<<<<<<< HEAD
    category: "Bills",
=======
    category: "Financial",
>>>>>>> c1d759e57d88e2db333b248975c1df7e12940a2e
    value: ""
  });

  const { addCost } = budgetContext;
  const { description, category, value } = cost;

  const onChange = e => {
    setCost({ ...cost, [e.target.name]: e.target.value });
  };

  const handleSelect = e => {
    setCost({ ...cost, category: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    cost.value = parseFloat(cost.value);
    addCost(cost);
    setCost({
      description: "",
<<<<<<< HEAD
      category: "Bills",
=======
      category: "Financial",
>>>>>>> c1d759e57d88e2db333b248975c1df7e12940a2e
      value: ""
    });
  };

  return (
    <div className="add-payment-form">
      <div className="card card-form">
        <div className="card-info__title">Add a payment</div>
        <form onSubmit={onSubmit}>
          <div className="form-group form__description">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              onChange={onChange}
              value={description}
              required
            />
          </div>
          <div className="form-group form__category">
            <label htmlFor="category">Category:</label>
            <select name="category" value={category} onChange={handleSelect}>
              <option value="Bills">Bills</option>
              <option value="Insurance">Insurance</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group form__cost">
            <label htmlFor="cost">Cost:</label>
            <input
              type="number"
              name="value"
              onChange={onChange}
              value={value}
              required
            />
          </div>
          <input className="form__submit" type="submit" value="ADD +" />
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
