//src/store/reducers/settingsReducer.js
const initialState = {
  personalityDescription: "",
  selectedTone: null,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PERSONALITY_DESCRIPTION":
      return { ...state, personalityDescription: action.payload };
    case "SET_SELECTED_TONE":
      return { ...state, selectedTone: action.payload };
    default:
      return state;
  }
};

export default settingsReducer;
