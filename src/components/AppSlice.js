import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== action.payload
      );
    },
    addFilter: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, addFilter } = phonebookSlice.actions;

export const selectContactsItems = state => state.phonebook.contacts.items;
export const selectContactsFilter = state => state.phonebook.contacts.filter;

export default phonebookSlice.reducer;
