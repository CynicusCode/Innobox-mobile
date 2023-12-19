//src/store/actions/tabActions.js
export const SET_CURRENT_TAB_INDEX = "SET_CURRENT_TAB_INDEX";

export const setCurrentTabIndex = (index) => ({
  type: SET_CURRENT_TAB_INDEX,
  payload: index,
});
