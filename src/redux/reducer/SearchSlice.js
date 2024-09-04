import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchEntry: '',
  },
  reducers: {
    setSearchEntry: (state, action) => {
      state.searchEntry = action.payload;
    },
  },
});

export const { setSearchEntry } = searchSlice.actions;

export default searchSlice.reducer;
