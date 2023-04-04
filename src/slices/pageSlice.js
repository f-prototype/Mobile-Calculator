import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isCalculator: true,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state) => {
      state.isCalculator = !state.isCalculator;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
