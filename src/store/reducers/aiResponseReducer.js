// src/store/reducers/aiResponseReducer.js
import { SET_AI_RESPONSE } from "../actions/aiResponseActions";

const initialState = {
  response: "",
};

const aiResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AI_RESPONSE:
      return { ...state, response: action.payload };
    default:
      return state;
  }
};

export default aiResponseReducer;
