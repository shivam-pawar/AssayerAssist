import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  karat: "0.00",
  gold: "0.00",
  silver: "0.00",
  copper: "100.00",
  zinc: "0.00",
  cadmium: "0.00",
  iridium: "0.00",
  ruthenium: "0.00",
  osmium: "0.00",
  lead: "0.00",
  iron: "0.00",
  nickel: "0.00",
  rhodium: "0.00",
  manganese: "0.00",
  tin: "0.00",
  platinum: "0.00",
  bismuth: "0.00",
  palladium: "0.00",
  cobalt: "0.00",
  rhenium: "0.00",
  tungsten: "0.00",
};
const formattedValue = (value: any) =>
  value >= 10 ? value.toFixed(2) : value.toFixed(2).padStart(5, "0");

export const sampleDetailsSlice = createSlice({
  name: "sampleDetails",
  initialState,
  reducers: {
    updateSampleDetails: (state, action) => {
      const { karat, copper, ...otherElements } = action.payload;
      const sumOfOtherElements: any = Object.values(otherElements).reduce(
        (sum: any, value: any) => Number(sum) + Number(value),
        0
      );
      const calculatedCopper = 100 - sumOfOtherElements;
      const calculatedKarat = (action.payload?.gold * 24) / 100;
      return {
        ...state,
        ...action.payload,
        copper: calculatedCopper < 0 ? 0 : formattedValue(calculatedCopper), // Ensure copper is not negative
        karat: calculatedKarat.toFixed(2),
      };
    },
  },
});

export const { updateSampleDetails } = sampleDetailsSlice.actions;
export default sampleDetailsSlice.reducer;
