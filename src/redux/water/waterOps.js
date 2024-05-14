import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://server-watertrack-project-nodejs.onrender.com/api/';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (water, thunkAPI) => {
    try {
      const response = await axios.post('/water/add', water);

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
      const response = await axios.delete(`/water/remove/${id}`);

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
      const response = await axios.put(`/water/edit/${id}`, putedWater);

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
      const response = await axios.get(`/water/day/${date}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
