import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import cityReducer from "./cityReducer";
import navReducer from "./navReducer";

let reducers = combineReducers({
  cityReducer,
  cartReducer,
  navReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
