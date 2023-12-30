import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userDetailsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removeUser: () => {
      return {};
    },
  },
});

export default userDetailsSlice.reducer;
export const { addUserDetails, removeUser } = userDetailsSlice.actions;
