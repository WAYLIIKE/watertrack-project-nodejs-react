import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://server-watertrack-project-nodejs.onrender.com/api/';
