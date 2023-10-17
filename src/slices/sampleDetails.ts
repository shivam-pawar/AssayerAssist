import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  karat: 0.0,
  gold: 0.0,
  silver: 0.0,
  copper: 0.0,
  zinc: 0.0,
  cadmium: 0.0,
  iridium: 0.0,
  ruthenium: 0.0,
  osmium: 0.0,
  lead: 0.0,
  iron: 0.0,
  nickel: 0.0,
  rhodium: 0.0,
  manganese: 0.0,
  tin: 0.0,
  platinum: 0.0,
  bismuth: 0.0,
  palladium: 0.0,
  cobalt: 0.0,
  rhenium: 0.0,
  tungsten: 0.0,
};

export const sampleDetailsSlice = createSlice({
  name: "sampleDetails",
  initialState,
  reducers: {
    updateSampleDetails: (state, action) => {
      state.karat = action.payload.karat;
      state.gold = action.payload.gold;
      state.silver = action.payload.silver;
      state.copper = action.payload.copper;
      state.zinc = action.payload.zinc;
      state.cadmium = action.payload.cadmium;
      state.iridium = action.payload.iridium;
      state.ruthenium = action.payload.ruthenium;
      state.osmium = action.payload.osmium;
      state.lead = action.payload.lead;
      state.iron = action.payload.iron;
      state.nickel = action.payload.nickel;
      state.rhodium = action.payload.rhodium;
      state.manganese = action.payload.manganese;
      state.tin = action.payload.tin;
      state.platinum = action.payload.platinum;
      state.bismuth = action.payload.bismuth;
      state.palladium = action.payload.palladium;
      state.cobalt = action.payload.cobalt;
      state.rhenium = action.payload.rhenium;
      state.tungsten = action.payload.tungsten;
    },
  },
});

export const { updateSampleDetails } = sampleDetailsSlice.actions;
export default sampleDetailsSlice.reducer;
