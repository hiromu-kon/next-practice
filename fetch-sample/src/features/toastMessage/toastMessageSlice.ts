import { createSlice } from '@reduxjs/toolkit';

export const toastMessageSlice = createSlice({
  name: 'toastMessage',
  initialState: { status: false },
  reducers: {
    showToastStatus: (state) => {
      state.status = true;
    },
    hiddenToastStatus: (state) => {
      state.status = false;
    },
  },
});

export const { showToastStatus, hiddenToastStatus } = toastMessageSlice.actions;

export default toastMessageSlice.reducer;
