// import { createSelector } from '@reduxjs/toolkit';

export const selectWater = (state) => state.water.items;

export const selectIsRefreshing = (state) => state.user.isRefreshing;

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const selectUser = (state) => state.user.user;

export const selectTotalDayWater = (state) => state.water.totalDayWater;

export const selectWaterLoading = (state) => state.water.loading;
