import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { loading: false, error: false },
});

export const userReducer = userSlice.reducer;
