import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut, signUp, current } from './userOps';
import toast from 'react-hot-toast';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      _id: null,
      name: null,
      email: null,
      avatarURL: null,
      gender: null,
      weight: null,
      activityTime: null,
      desiredVolume: null,
      createdAt: null,
      updatedAt: null,
    },
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
  },
  reducers: {
    refreshTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        toast.success('Successfully registered!', {
          duration: 5000,
          position: 'top-center',
        });
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(signOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = {
          _id: null,
          name: null,
          email: null,
          avatarURL: null,
          gender: null,
          weight: null,
          activityTime: null,
          desiredVolume: null,
          createdAt: null,
          updatedAt: null,
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(current.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(current.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const { refreshTokens } = userSlice.actions;

export const userReducer = userSlice.reducer;
