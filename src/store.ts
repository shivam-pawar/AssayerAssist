import { configureStore } from "@reduxjs/toolkit";
import customerDetailsReducer from "./slices/customerDetails";
const store = configureStore({
  reducer: {
    customerDetails: customerDetailsReducer,
  },
});

export default store;
