// src/store/actions/emailActions.js
import {
  SET_EMAILS,
  SET_CURRENT_EMAIL_INDEX,
  SET_LOADING,
} from "../actionTypes";

export const setEmails = (emails) => ({
  type: SET_EMAILS,
  payload: emails,
});

export const setCurrentEmailIndex = (index) => ({
  type: SET_CURRENT_EMAIL_INDEX,
  payload: index,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});
