export default (state, action) => {
  switch (action.type) {
    case "ADD_COST":
      console.log(action.payload.id);
      return {
        ...state,
        costs: [...state.costs, action.payload]
      };
    case "DELETE_COST":
      console.log(state);
      return {
        ...state,
        costs: state.costs.filter(cost => cost.id !== action.payload)
      };
    case "UPDATE_BALANCE":
      return {
        ...state,
        remainingBalance:
          state.income - state.costs.reduce((acc, cost) => acc + cost.value, 0)
      };
    case "TOGGLE_INCOME_EDIT":
      return {
        ...state,
        editIncome: !state.editIncome
      };
    case "INCOME_UPDATE":
      return {
        ...state,
        income: action.payload
      };
    case "TOGGLE_COST_EDIT":
      return {
        ...state,
        editCost: !state.editCost
      };
    default:
      return state;
  }
};
