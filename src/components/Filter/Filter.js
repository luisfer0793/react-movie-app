import React, { useRef, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import './Filter.css';

const Filter = props => {
    let inputRef = useRef();

    const dispatch = useDispatch();
    const searchText = useSelector(state => state.searchText);

    const action = text => {
        return ({
            type: 'UPDATE_SEARCH_TEXT',
            payload: {
                text
            }
        });
    }

    return (
        <input
            ref={inputRef}
            onChange={() => dispatch(action(inputRef.current.value))}
            className="filter"
            type="text"
            placeholder='Buscar Películas'
        />
    );
}

export default Filter;