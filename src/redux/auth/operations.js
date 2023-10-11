import * as authService from 'api/authServices';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logoutReset } from './slice';
import { resetReviewState } from '../review/slice';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await authService.register(credentials);
      return data;
    } catch ({ response: { status, data } }) {
      return thunkAPI.rejectWithValue({
        status,
        message: data.message,
      });
    }
  }
);

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await authService.login(credentials);
    return data;
  } catch ({ response: { status, data } }) {
    return thunkAPI.rejectWithValue({
      status,
      message: data.message,
    });
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  thunkAPI.dispatch(logoutReset());
  thunkAPI.dispatch(resetReviewState());
  try {
    await authService.logout();
  } catch ({ response: { status, data } }) {
    return thunkAPI.rejectWithValue({
      status,
      message: data.message,
    });
  }
});

const currentUser = createAsyncThunk('', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue({
      status: null,
      message: 'No access token',
    });
  }

  try {
    const data = await authService.getCurrent(persistedToken);
    return data;
  } catch ({ response: { status, data } }) {
    return thunkAPI.rejectWithValue({
      status,
      message: data.message,
    });
  }
});

const updateUser = createAsyncThunk(
  'auth/user',
  async (credentials, thunkAPI) => {
    try {
      const data = await authService.updateUser(credentials);
      return data;
    } catch ({ response: { status, data } }) {
      return thunkAPI.rejectWithValue({
        status,
        message: data.message,
      });
    }
  }
);

export { register, logout, login, currentUser, updateUser };
