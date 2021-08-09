import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reduxSlices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
