// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Your root reducer

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* other middleware */),
});

export default store;
