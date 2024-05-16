import { createSlice } from '@reduxjs/toolkit';
import { addWater } from './waterOps';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    date: null,
    amount: null,
    loading: false,
    error: false,
  },
  extraReducers: (builer) =>
    builer
      .addCase(addWater.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.loading = false;
        state.date = action.payload.date;
        state.amount = action.payload.amount;
      })
      .addCase(addWater.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const waterReducer = waterSlice.reducer;
