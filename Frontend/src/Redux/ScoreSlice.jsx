import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    scoreInfo: null,
  },
  reducers: {
    setUserScore: (state, action) => {
      state.scoreInfo = action.payload;
    },
  },
});

export const { setUserScore } = scoreSlice.actions;
export default scoreSlice.reducer;
