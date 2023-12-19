//src/store/reducers/tabReducer.js
import { SET_CURRENT_TAB_INDEX } from "../actions/tabActions";

const initialState = {
  currentTabIndex: 0,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TAB_INDEX:
      return { ...state, currentTabIndex: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
