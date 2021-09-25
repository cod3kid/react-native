import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import cityReducer from "./cityReducer";

let reducers = combineReducers({
  cityReducer,
  cartReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
