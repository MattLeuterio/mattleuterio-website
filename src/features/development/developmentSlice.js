import { createSlice } from '@reduxjs/toolkit';

export const developmentSlice = createSlice({
  name: 'DEVELOPMENT',
  initialState: {
    contentType: '',
    imageSelected: {}
  },
  reducers: {
    setContentType : (state, data) => {
      state.contentType = data.payload;
    },
    setImageSelected : (state, data) => {
      state.imageSelected = data.payload;
    },
  }
}); 

export const { setContentType, setImageSelected } = developmentSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectDevelopmentContentType = state => state.development.contentType;
export const selectDevelopmentImageSelected = state => state.development.imageSelected;

export default developmentSlice.reducer;
