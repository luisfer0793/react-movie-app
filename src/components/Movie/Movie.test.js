import React from 'react';
import {Provider} from 'react-redux';
import {configure, shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import Movie from './Movie';

configure({adapter: new Adapter()});

describe('<Movie />', () => {
    const initialState = {movies: []};
    const mockStore = configureStore();

    it('Should render a movie card element', () => {
        const store = mockStore(initialState);
        const wrapper = shallow(<Provider store={store}><Movie /></Provider>);
        expect(wrapper.find('div.movie-card')).toHaveLenght(1);
    });
});