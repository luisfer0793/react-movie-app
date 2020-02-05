import { createStore, combineReducers } from 'redux';

import movies from './reducers/movies';
import searchText from './reducers/searchText';
import currentGenre from './reducers/currentGenre';
import currentMovie from './reducers/currentMovie';

const reducers = combineReducers({
    movies,
    searchText,
    currentGenre,
    currentMovie
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;