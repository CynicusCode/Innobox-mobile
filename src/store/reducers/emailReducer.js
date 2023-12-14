// src/store/reducers/emailReducer.js
import {
  SET_EMAILS,
  SET_CURRENT_EMAIL_INDEX,
  SET_LOADING,
} from "../actionTypes";

const initialState = {
  emails: [],
  currentEmailIndex: 0,
  isLoading: true,
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAILS:
      return { ...state, emails: action.payload };
    case SET_CURRENT_EMAIL_INDEX:
      return { ...state, currentEmailIndex: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default emailReducer;
