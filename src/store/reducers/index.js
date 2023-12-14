// src/store/reducers/index.js
import { combineReducers } from "redux";
import emailReducer from "./emailReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
  email: emailReducer,
  settings: settingsReducer,
});

export default rootReducer;
