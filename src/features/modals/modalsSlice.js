import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    searchModalToggle: false,
  },
  reducers: {
    searchModalToggle : state => {
      state.searchModalToggle = !state.searchModalToggle;
    }
  }
});

export const { searchModalToggle } = modalsSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSearchModal = state => state.modals.searchModalToggle;

export default modalsSlice.reducer;
