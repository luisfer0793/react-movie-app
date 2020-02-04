import { createStore, combineReducers } from 'redux';

import movies from '../reducers/movies';
import searchText from '../reducers/searchText';
import currentGenre from '../reducers/currentGenre';
import currentMovieId from '../reducers/currentMovieId';

const reducers = combineReducers({
    movies,
    searchText,
    currentGenre,
    currentMovieId
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;