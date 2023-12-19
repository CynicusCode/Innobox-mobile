// src/store/actions/aiResponseActions.js
export const SET_AI_RESPONSE = "SET_AI_RESPONSE";

export const setAiResponse = (response) => ({
  type: SET_AI_RESPONSE,
  payload: response,
});
