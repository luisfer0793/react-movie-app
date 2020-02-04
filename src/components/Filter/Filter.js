import React from 'react';
import { connect } from 'react-redux';

import './Filter.css';

const Filter = props => {
    const {searchText, placeholder, searchTextHandler} = props;
    return (
        <input
            // onChange={props.searchTextHandler}
            onChange={() => console.log(props)}
            className="filter"
            type="text"
            placeholder={props.placeholder}
        />
    );
}

const mapStateToProps = state => {
    return {
        searchText: state.searchText
    };
}

export default connect(mapStateToProps)(Filter);