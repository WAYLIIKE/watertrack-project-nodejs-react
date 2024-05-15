// import { createSelector } from '@reduxjs/toolkit';

export const selectWater = (state) => state.water.items;

export const selectIsRefreshing = (state) => state.user.isRefreshing;

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const selectUser = (state) => state.user.user;
