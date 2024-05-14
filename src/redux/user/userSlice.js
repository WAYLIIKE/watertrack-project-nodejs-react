import { createSlice } from '@reduxjs/toolkit';
import { refresh, signIn, signOut, signUp } from './userOps';
import toast from 'react-hot-toast';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: null,
      email: null,
      avatarURL: null,
      gender: null,
      weight: null,
      activityTime: null,
      desiredVolume: null,
    },
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        console.log(action.payload);
        toast.success('Successfully registered!', {
          duration: 5000,
          position: 'top-center',
        });
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          avatarURL: null,
          gender: null,
          weight: null,
          activityTime: null,
          desiredVolume: null,
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const userReducer = userSlice.reducer;
