import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  deleteWater,
  getDayWater,
  getMonthWater,
  putWater,
} from './waterOps';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    date: null,
    totalDayWater: 0,
    items: [],
    monthItems: [],
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
      })
      .addCase(putWater.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(putWater.fulfilled, (state, action) => {
        state.loading = false;
        const deletedWaterIndex = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        const prevWater = state.items.find(
          (item) => item._id === action.payload._id
        );
        state.items = state.items.splice(deletedWaterIndex, 1, action.payload);
        if (prevWater.amount > action.payload.amount)
          state.totalDayWater += action.payload.amount - prevWater.amount;
        else state.totalDayWater += prevWater.amount - action.payload.amount;
      })
      .addCase(putWater.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getDayWater.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getDayWater.fulfilled, (state, action) => {
        state.loading = false;
        state.date = action.payload.date;
        state.totalDayWater = action.payload.totalDayWater;
        state.items = action.payload.consumedWaterData;
      })
      .addCase(getDayWater.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getMonthWater.fulfilled, (state, action) => {
        state.monthItems = action.payload;
      })
      .addCase(getMonthWater.rejected, (state) => {
        state.error = true;
      }),
});

export const waterReducer = waterSlice.reducer;
