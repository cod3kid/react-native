const initialState = { name: "Los Angeles", location: null };

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CITY_DATA":
      return action.payload;

    default:
      return state;
  }
};
export default cityReducer;
