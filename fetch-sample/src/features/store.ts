import { configureStore } from '@reduxjs/toolkit';
import toastMessageSlice from './toastMessage/toastMessageSlice';

export const store = configureStore({
  reducer: {
    toastMessage: toastMessageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
