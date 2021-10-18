import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'dark',
    name: 'mate'
  }
});

export const selectTheme = state => state.settings.theme;

export default settingsSlice.reducer;
