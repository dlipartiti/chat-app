import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './reducers/counterSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});
