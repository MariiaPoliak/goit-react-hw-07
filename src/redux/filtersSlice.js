import { createSlice } from '@reduxjs/toolkit';

// Початковий стан для фільтра
const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
