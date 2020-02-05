import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Navigation from './Navigation';

configure({adapter: new Adapter()});

describe('<Navigation />', () => {
    const initialState = {movies: []};
    const mockStore = configureStore();

    it('Should render a navigation element', () => {
        const store = mockStore(initialState);
        const wrapper = shallow(<Provider store={store}><Navigation /></Provider>);
        expect(wrapper.find('.navbar')).toHaveLenght(1);
    });
});