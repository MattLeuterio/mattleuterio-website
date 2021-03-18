import { configureStore } from '@reduxjs/toolkit';
import menuElementsReducer from '../features/menuElements/menuElementsSlice';
import quoteJumbotronReducer from '../features/quoteJumbotron/quoteJumbotronSlice';
import listGamesReducer from '../features/listGames/listGamesSlice';
import gameDataReducer from '../features/game/gameSlice';
import searchResultsReducer from '../features/search/searchSlice';
import modalsReducer from '../features/modals/modalsSlice';
import settingsReducer from '../features/settings/settingsSlice';

export default configureStore({
  reducer: {
    menuElements: menuElementsReducer,
    quoteJumbotron: quoteJumbotronReducer,
    listGames: listGamesReducer,
    game: gameDataReducer,
    search: searchResultsReducer,
    modals: modalsReducer,
    settings: settingsReducer,
  },
});
