import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://server-watertrack-project-nodejs.onrender.com/api/';

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'user/signup',
  async (signUpData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', signUpData);

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
      const response = await axios.post('/users/signin', signInData);

      setAuthHeader(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk('user/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/signout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const refresh = createAsyncThunk(
//   'user/refresh',
//   async ({ abortController }, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedRefreshToken = state.user.refreshToken;

//     if (persistedRefreshToken === null) {
//       return thunkAPI.rejectWithValue('Unable to refresh user');
//     }

//     try {
//       const response = await axios.post(
//         '/users/current/refresh',
//         {
//           refreshToken: persistedRefreshToken,
//         },
//         {
//           signal: abortController.signal,
//         }
//       );
//       console.log(response.data);

//       setAuthHeader(response.data.accessToken);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const refresh = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedRefreshToken = state.user.refreshToken;

  if (persistedRefreshToken === null) {
    return thunkAPI.rejectWithValue('Unable to refresh user');
  }

  try {
    const response = await axios.post('/users/current/refresh', {
      refreshToken: persistedRefreshToken,
    });
    console.log(response.data);

    setAuthHeader(response.data.accessToken);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const current = createAsyncThunk(
//   'user/current',
//   async ({ abortController }, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedAccessToken = state.user.accessToken;

//     if (persistedAccessToken === null) {
//       return thunkAPI.rejectWithValue('Unable to get current user');
//     }

//     setAuthHeader(persistedAccessToken);

//     try {
//       const response = await axios.get('/users/current', {
//         signal: abortController.signal,
//       });

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const current = createAsyncThunk('user/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedAccessToken = state.user.accessToken;

  if (persistedAccessToken === null) {
    return thunkAPI.rejectWithValue('Unable to get current user');
  }

  try {
    setAuthHeader(persistedAccessToken);
    const response = await axios.get('/users/current');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentEdit = createAsyncThunk(
  'user/currentEdit',
  async (editedUser, thunkAPI) => {
    try {
      const response = await axios.patch(`/users/current/edit`, editedUser);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
