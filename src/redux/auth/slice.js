import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  currentUser,
  updateUser,
} from './operations';

const initialState = {
  user: null,
  token: null,

  isLoading: true,
  error: '',
};

const handlePending = (state, _) => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledUser = (state, { payload }) => {
  state.isLoading = false;
  const { token, ...user } = payload.user;
  state.user = user;
  state.token = payload.token;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutReset(state) {
      state.user = null;
      state.token = null;
      state.isLoading = true;
    },

    currentToken(state, { payload }) {
      state.token = payload.token;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, (state, _) => {
        state.isLoading = false;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { token, ...user } = payload.user;
        state.user = user;
      })
      .addCase(updateUser.pending, handlePending)
      .addCase(
        updateUser.fulfilled,
        (
          state,
          { payload: { name, email, phone, birthday, skype, avatarURL } }
        ) => {
          state.isLoading = false;
          state.user.name = name;
          state.user.email = email;
          state.user.phone = phone;
          state.user.birthday = birthday;
          state.user.skype = skype;
          state.user.avatarURL = avatarURL;
        }
      )
      .addCase(updateUser.rejected, handleRejected)
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          currentUser.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          currentUser.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        handleFulfilledUser
      );
  },
});

export const authReducer = authSlice.reducer;
export const { logoutReset, currentToken } = authSlice.actions;
