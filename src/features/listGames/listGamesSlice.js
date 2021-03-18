import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// MomentJS
const moment = require('moment');
const now = moment().format("YYYY-MM-DD");
const lastYear = moment().subtract(1, "years").format("YYYY-MM-DD");

export const getNew = createAsyncThunk(
  'listGames/getNew',
  async () => {
    return axios.get('https://api.rawg.io/api/games/lists/main', { params: { page_size: '3', ordering: '-released'} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const getGameByGenre = createAsyncThunk(
  'listGames/getGameByGenre',
  async (params) => {
    return axios.get(`https://api.rawg.io/api/games`, { params: {genres: params.slug, page: params.page, page_size: '20', ordering: params.ordering, parent_platforms: params.platform} })
    .then(res => res.data).catch(err => console.error(err));
  }
)

export const getTopAdventure = createAsyncThunk(
  'listGames/getTopAdventure',
  async () => {
    return axios.get('https://api.rawg.io/api/games', { params: { page_size: '10', ordering: '-metacritic', genres: '3', dates: `${lastYear},${now}`} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const getTopShooter = createAsyncThunk(
  'listGames/getTopShooter',
  async () => {
    return axios.get('https://api.rawg.io/api/games', { params: { page_size: '10', ordering: '-metacritic', genres: '2', dates: `${lastYear},${now}`} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const getTopIndie = createAsyncThunk(
  'listGames/getTopIndie',
  async () => {
    return axios.get('https://api.rawg.io/api/games', { params: { page_size: '10', ordering: '-metacritic', genres: '51', dates: `${lastYear},${now}`} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const getTopRPG = createAsyncThunk(
  'listGames/getTopRPG',
  async () => {
    return axios.get('https://api.rawg.io/api/games', { params: { page_size: '10', ordering: '-metacritic', genres: '5', dates: `${lastYear},${now}`} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const getTopMOBA = createAsyncThunk(
  'listGames/getTopMOBA',
  async () => {
    return axios.get('https://api.rawg.io/api/games', { params: { page_size: '10', ordering: '-metacritic', genres: '59', dates: `${lastYear},${now}`} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const getTopSport = createAsyncThunk(
  'listGames/getTopSport',
  async () => {
    return axios.get('https://api.rawg.io/api/games', { params: { page_size: '10', ordering: '-metacritic', genres: '15', dates: `${lastYear},${now}`} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const getTopArcade = createAsyncThunk(
  'listGames/getTopArcade',
  async () => {
    return axios.get('https://api.rawg.io/api/games', { params: { page_size: '10', ordering: '-metacritic', genres: '11', dates: `${lastYear},${now}`} })
    .then(res => res.data.results).catch(err => console.error(err));
  }
)

export const listGamesSlice = createSlice({
  name: 'listGames',
  initialState: {
    games: [
      {
        path: "/the-last-of-us",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-1",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-2",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-3",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-4",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-5",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-6",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-7",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-8",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
      {
        path: "/the-last-of-us-9",
        title: "The Last of Us",
        category: "adventure",
        platform: "Playstation 3",
        cover: "https://grantland.com/wp-content/uploads/2013/06/grant_r_thelastofus_64011.jpg?w=1003",
        vote: 91,
      },
    ],
    listNew: [],
    listGamesByGenre: [],
    listTopAdventure: [],
    listTopShooter: [],
    listTopIndie: [],
    listTopRPG: [],
    listTopMOBA: [],
    listTopSport: [],
    listTopArcade: [],
  },
  extraReducers: {
    [getNew.fulfilled]: (state, { payload }) => {
      state.listNew = payload
    },
    [getGameByGenre.fulfilled]: (state, { payload }) => {
      state.listGamesByGenre = payload
    },
    [getTopAdventure.fulfilled]: (state, { payload }) => {
      state.listTopAdventure = payload
    },
    [getTopShooter.fulfilled]: (state, { payload }) => {
      state.listTopShooter = payload
    },
    [getTopIndie.fulfilled]: (state, { payload }) => {
      state.listTopIndie = payload
    },
    [getTopRPG.fulfilled]: (state, { payload }) => {
      state.listTopRPG = payload
    },
    [getTopMOBA.fulfilled]: (state, { payload }) => {
      state.listTopMOBA = payload
    },
    [getTopSport.fulfilled]: (state, { payload }) => {
      state.listTopSport = payload
    },
    [getTopArcade.fulfilled]: (state, { payload }) => {
      state.listTopArcade = payload
    },
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectListGames = state => state.listGames.games;
export const selectNew = state => state.listGames.listNew;
export const selectGamesByGenre = state => state.listGames.listGamesByGenre;
export const selectTopAdventure = state => state.listGames.listTopAdventure;
export const selectTopShooter = state => state.listGames.listTopShooter;
export const selectTopIndie = state => state.listGames.listTopIndie;
export const selectTopRPG = state => state.listGames.listTopRPG;
export const selectTopMOBA = state => state.listGames.listTopMOBA;
export const selectTopSport = state => state.listGames.listTopSport;
export const selectTopArcade = state => state.listGames.listTopArcade;

export default listGamesSlice.reducer;
