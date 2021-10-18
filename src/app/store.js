import { configureStore } from '@reduxjs/toolkit';
import menuElementsReducer from '../features/menuElements/menuElementsSlice';
import quoteJumbotronReducer from '../features/quoteJumbotron/quoteJumbotronSlice';
import listGamesReducer from '../features/listGames/listGamesSlice';
import gameDataReducer from '../features/game/gameSlice';
import searchResultsReducer from '../features/search/searchSlice';
import modalsReducer from '../features/modals/modalsSlice';
import panelsReducer from '../features/panels/panelsSlice';
import settingsReducer from '../features/settings/settingsSlice';
import developmentReducer from '../features/development/developmentSlice';

export default configureStore({
  reducer: {
    menuElements: menuElementsReducer,
    quoteJumbotron: quoteJumbotronReducer,
    listGames: listGamesReducer,
    game: gameDataReducer,
    search: searchResultsReducer,
    modals: modalsReducer,
    panels: panelsReducer,
    settings: settingsReducer,
    development: developmentReducer
  },
});
