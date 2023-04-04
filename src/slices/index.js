import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import pageReducer from './pageSlice';
import mathReducer from './mathSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    page: pageReducer,
    math: mathReducer,
  },
  devTools: true,
});
