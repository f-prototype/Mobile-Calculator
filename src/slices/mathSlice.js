import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  result: '',
  mathHistory: '',
  timerValue: {
    hour: '00',
    minutes: '00',
    seconds: '00',
  },
};

const mathSlice = createSlice({
  name: 'math',
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setMathHistory: (state, action) => {
      state.mathHistory = action.payload;
    },
    setTimerValue: (state, action) => {
      state.timerValue = action.payload;
    },
  },
});

export const { setResult, setMathHistory, setTimerValue } = mathSlice.actions;
export default mathSlice.reducer;
