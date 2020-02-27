export default (state, action) => {
  switch (action.type) {
    case "ADD_COST":
      return {
        ...state,
        costs: [...state.costs, action.payload]
      };
    case "DELETE_COST":
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
    case "EDIT_COST_TOGGLE":
      return {
        ...state,
        costs: state.costs.map(cost =>
          cost.id === action.payload
            ? { ...cost, editState: !cost.editState }
            : cost
        )
      };

    case "COST_UPDATE":
      return {
        ...state,
        costs: state.costs.map(cost =>
          cost.id === action.payload.id
            ? { ...cost, value: action.payload.value }
            : cost
        )
      };

    default:
      return state;
  }
};
