import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Movie from '../Movie/Movie';
import MovieList from './MovieList';

configure({adapter: new Adapter()});

describe('<MovieList />', () => {
    const initialState = {movies: []};
    const mockStore = configureStore();

    it('Should render a movie list', () => {
        const store = mockStore(initialState);
        const wrapper = shallow(<Provider store={store}><MovieList /></Provider>);
        expect(wrapper.find(Movie)).toHaveLength(0);
    });
});