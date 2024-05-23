import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { refreshTokens } from './userSlice';

export const axiosInstance = axios.create({
  baseURL: 'https://server-watertrack-project-nodejs.onrender.com/api',
});

// Utility to add JWT
const setAuthHeader = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export const setupAxiosInterceptors = (store) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        try {
          const { refreshToken } = store.getState().user;
          if (refreshToken) {
            const { data } = await axiosInstance.post(
              '/users/current/refresh',
              {
                refreshToken,
              }
            );
            await setAuthHeader(data.accessToken);
            await store.dispatch(refreshTokens(data));
            error.config.headers.authorization = `Bearer ${data.accessToken}`;
          }

          return axios.request(error.config);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
};

export const signUp = createAsyncThunk(
  'user/signup',
  async (signUpData, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/users/signup', signUpData);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'user/signin',
  async (signInData, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/users/signin', signInData);

      setAuthHeader(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const signOut = createAsyncThunk('user/signout', async (_, thunkAPI) => {
  try {
    await axiosInstance.post('/users/signout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk('user/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedAccessToken = state.user.accessToken;

  if (persistedAccessToken === null) {
    return thunkAPI.rejectWithValue('Unable to get current user');
  }

  try {
    setAuthHeader(persistedAccessToken);
    const response = await axiosInstance.get('/users/current');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentEdit = createAsyncThunk(
  'user/currentEdit',
  async (editedUser, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedAccessToken = state.user.accessToken;

    if (persistedAccessToken === null) {
      return thunkAPI.rejectWithValue('Unable to get current user');
    }

    try {
      setAuthHeader(persistedAccessToken);
      const response = await axiosInstance.patch(
        `/users/current/edit`,
        editedUser
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserCount = createAsyncThunk(
  'user/count',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/users/count');
      return response.data.count;
      } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
      
export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (passwords, thunkAPI) => {
    const state = thunkAPI.getState();
    const { _id: userId } = state.user.user;

    const persistedAccessToken = state.user.accessToken;

    if (persistedAccessToken === null) {
      return thunkAPI.rejectWithValue('Unable to get current user');
    }

    try {
      setAuthHeader(persistedAccessToken);

      const response = await axiosInstance.patch(
        `users/current/edit/password/${userId}`,
        passwords
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
