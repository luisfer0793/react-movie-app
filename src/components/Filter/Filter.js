import React from 'react';

import './Filter.css';

const Filter = ({searchTextHandler, placeholder}) => {
    return (
        <input
            onChange={searchTextHandler}
            className="filter"
            type="text"
            placeholder={placeholder}
        />
    );
}

export default Filter;