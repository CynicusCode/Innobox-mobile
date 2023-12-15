//src/store/actions/settingsActions.js
export const setPersonalityDescription = (description) => ({
  type: "SET_PERSONALITY_DESCRIPTION",
  payload: description,
});

export const setSelectedTone = (tone) => ({
  type: "SET_SELECTED_TONE",
  payload: tone,
});
