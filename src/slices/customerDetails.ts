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
      state.serialNumber = action.payload.serialNumber;
      state.customerName = action.payload.customerName;
      state.sampleName = action.payload.sampleName;
      state.weight = action.payload.weight;
      state.recordDate = action.payload.recordDate;
      state.sampleType = action.payload.sampleType;
    },
  },
});

export const { updateCustomerDetails } = customerDetailsSlice.actions;
export default customerDetailsSlice.reducer;
