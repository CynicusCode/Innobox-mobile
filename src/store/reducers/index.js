// src/store/reducers/index.js
import { combineReducers } from "redux";
import emailReducer from "./emailReducer";
import settingsReducer from "./settingsReducer";
import aiResponseReducer from "./aiResponseReducer";
import tabReducer from "./tabReducer";

const rootReducer = combineReducers({
  email: emailReducer,
  settings: settingsReducer,
  aiResponse: aiResponseReducer,
  tab: tabReducer,
});

export default rootReducer;
