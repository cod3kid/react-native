import { combineReducers } from "redux";
import cityReducer from "./cityReducer";

let reducers = combineReducers({
  cityReducer: cityReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
