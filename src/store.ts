import { configureStore } from "@reduxjs/toolkit";
import customerDetailsReducer from "./slices/customerDetails";
import sampleDetailsReducer from "./slices/sampleDetails";
import userDetailsReducer from "./slices/userDetails";
const store = configureStore({
  reducer: {
    customerDetails: customerDetailsReducer,
    sampleDetails: sampleDetailsReducer,
    user: userDetailsReducer,
  },
});

export default store;
