import { createSlice } from '@reduxjs/toolkit';

export const panelsSlice = createSlice({
  name: 'PANELS',
  initialState: {
    panels: [
      {
        name: "development",
        open: false,
        active: false,
        minimize: false,
      },
      {
        name: "filmmaking",
        open: false,
        active: false,
        minimize: false,
      },
      {
        name: "profile",
        open: false,
        active: false,
        minimize: false,
      },
      {
        name: "settings",
        open: false,
        active: false,
        minimize: false,
      },
      {
        name: "trash",
        open: false,
        active: false,
        minimize: false,
      },
      {
        name: "about",
        open: false,
        active: false,
        minimize: false,
      },
    ]
  },
  reducers: {
    setPanelActive : (state, data) => {
      const newPanels = state.panels.reduce((acc, object) => {
          return [...acc, { ...object, active: data.payload === object.name}];
      }, []);
      state.panels = newPanels;
    },
    openPanel : (state, data) => {
      const newPanels = state.panels.reduce((acc, object) => {
          return [...acc, { 
            ...object, open: data.payload === object.name ? 
            object.open = true : object.open, active: data.payload === object.name ? 
            object.active = true : object.active = false
          }];
      }, []);
      state.panels = newPanels;
    },
    closePanel : (state, data) => {
      const newPanels = state.panels.reduce((acc, object) => {
          return [...acc, { 
            ...object, open: data.payload === object.name ? 
            object.open = false : object.open
          }];
      }, []);
      state.panels = newPanels;
    },
  }
}); 

export const { setPanelActive, openPanel, closePanel } = panelsSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPanels = state => state.panels.panels;

export default panelsSlice.reducer;
