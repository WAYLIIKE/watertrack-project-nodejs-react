import { createSlice } from '@reduxjs/toolkit';
import { addWater, deleteWater } from './waterOps';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    date: null,
    totalDayWater: 0,
    items: [],
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
        state.items = state.items.push(action.payload);
        state.totalDayWater += action.payload.amount;
      })
      .addCase(addWater.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteWater.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.loading = false;
        const deletedWaterIndex = state.items.findIndex(action.payload._id);
        state.items = state.items.splice(deletedWaterIndex, 1);
        state.totalDayWater -= action.payload.amount;
      })
      .addCase(deleteWater.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const waterReducer = waterSlice.reducer;
