import { createAsyncThunk } from '@reduxjs/toolkit';
/* import api from 'api/api'; */
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/';

export const getReview = createAsyncThunk(
  'reviews/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('reviews/own');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postReview = createAsyncThunk(
  'reviews/post',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/reviews/own', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/update',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch('reviews/own', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/delete',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.delete(`reviews/own`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
