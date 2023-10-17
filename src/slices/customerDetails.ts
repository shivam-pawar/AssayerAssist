import { createSlice } from "@reduxjs/toolkit";
import { customerDetailsType } from "../interfaces/customerDetails";

const initialState: customerDetailsType = {
  serialNumber: 0,
  customerName: "",
  sampleName: "",
  weight: 0,
  recordDate: new Date(),
  sampleType: "",
};

export const customerDetailsSlice = createSlice({
  name: "customerDetails",
  initialState,
  reducers: {
    updateCustomerDetails: (state, action) => {
      state = action.payload;
    },
  },
});

export const { updateCustomerDetails } = customerDetailsSlice.actions;
export default customerDetailsSlice.reducer;
