import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from '../components/AppSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});
