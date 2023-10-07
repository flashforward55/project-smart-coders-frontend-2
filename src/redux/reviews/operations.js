import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8000';

export const getAllReviews = createAsyncThunk(
  'reviews/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserReview = createAsyncThunk(
  'reviews/getUserReview',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews/own');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createReview = createAsyncThunk(
  'reviews/createReview',
  async ({ rating, review }, thunkAPI) => {
    try {
      const response = await axios.post('/reviews/own', { rating, review });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async ({ rating, comment }, thunkAPI) => {
    try {
      const response = await axios.patch('/reviews/own', { rating, comment });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete('/reviews/own');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
