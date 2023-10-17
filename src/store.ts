import { configureStore } from "@reduxjs/toolkit";
import customerDetailsReducer from "./slices/customerDetails";
import sampleDetailsReducer from "./slices/sampleDetails";
const store = configureStore({
  reducer: {
    customerDetails: customerDetailsReducer,
    sampleDetails: sampleDetailsReducer,
  },
});

export default store;
