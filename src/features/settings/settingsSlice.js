import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'dark',
    name: 'mate'
  }
});

export const selectTheme = state => state.settings.theme;
export const selectName = state => state.menuElements.name;

export default settingsSlice.reducer;
