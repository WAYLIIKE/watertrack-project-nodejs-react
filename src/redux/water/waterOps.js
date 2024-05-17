import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../user/userOps';
// import axios from 'axios';

// axios.defaults.baseURL =
//   'https://server-watertrack-project-nodejs.onrender.com/api/';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (water, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/water/add', water);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/water/remove/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const putWater = createAsyncThunk(
  'water/putWater',
  async ([id, putedWater], thunkAPI) => {
    try {
      const response = await axiosInstance.put(`/water/edit/${id}`, putedWater);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDayWater = createAsyncThunk(
  'water/getDayWater',
  async (date, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/water/day/${date}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
