import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLight: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.isLight = !state.isLight;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
