import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import store from './redux/store/store';

import './index.css';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
