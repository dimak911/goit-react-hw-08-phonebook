import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: {
    name: '',
    email: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    removeUserData: state => {
      state.token = initialState.token;
      state.user = initialState.user;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { addUserData, removeUserData } = authSlice.actions;

export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
