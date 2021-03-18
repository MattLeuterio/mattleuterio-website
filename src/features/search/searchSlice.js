import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSearchResults = createAsyncThunk(
  'search/getSearchResults',
  async (params) => {
    return axios.get(`https://api.rawg.io/api/games`, { params: {search: params.text, page: params.page, parent_platforms: params.platform, genres: params.genre, ordering: params.ordering}})
    .then(res => res.data).catch(err => console.error(err));
  }
)

export const getPlatformsList = createAsyncThunk(
  'search/getPlatformsList',
  async () => {
    return axios.get(`https://api.rawg.io/api/platforms/lists/parents`)
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const getGenresList = createAsyncThunk(
  'search/getGenresList',
  async () => {
    return axios.get(`https://api.rawg.io/api/genres`)
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchResults: [],
    platformsList: [],
    genresList: [],
    ordering: [
      { id: "name", name: "Name (A-Z)"},
      { id: "-name", name: "Name (Z-A)"},
      { id: "-released", name: "Released ⬇"},
      { id: "released", name: "Released ⬆"},
      { id: "-metacritic", name: "Vote ⬇"},
      { id: "metacritic", name: "Vote ⬆"},
    ]
  },
  extraReducers: {
    [getSearchResults.fulfilled]: (state, { payload }) => {
      state.searchResults = payload
    },
    [getPlatformsList.fulfilled]: (state, { payload }) => {
      state.platformsList = payload
    },
    [getGenresList.fulfilled]: (state, { payload }) => {
      state.genresList = payload
    },
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSearchResults = state => state.search.searchResults;
export const selectPlatforms = state => state.search.platformsList;
export const selectGenres = state => state.search.genresList;
export const selectOrder = state => state.search.ordering;

export default searchSlice.reducer;
