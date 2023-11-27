import { createSlice } from "@reduxjs/toolkit";
import { customerDetailsType } from "../interfaces/customerDetails";
import moment from "moment";

const initialState: customerDetailsType = {
  serialNumber: 0,
  customerName: "",
  sampleName: "",
  weight: 0,
  recordDate: moment().toISOString(),
  sampleType: "gold",
};

export const customerDetailsSlice = createSlice({
  name: "customerDetails",
  initialState,
  reducers: {
    updateCustomerDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateCustomerDetails } = customerDetailsSlice.actions;
export default customerDetailsSlice.reducer;
