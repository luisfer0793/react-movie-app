import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';

import updateSearchTextAction from '../../redux/actions/update-search-text-action';

import './Filter.css';

const Filter = props => {
    const inputRef = useRef();
    
    const updateText = () => props.updateSearchText(inputRef.current.value);
    
    useEffect(() => {
        inputRef.current.value = '';
        props.updateSearchText('');
    }, [props.currentGenre]);
    
    return (
        <input
            ref={inputRef}
            onChange={updateText}
            className="filter"
            type="text"
            placeholder='Buscar Películas'
        />
    );
}

const mapStateToProps = state => ({
    currentGenre: state.currentGenre,
    searchText: state.searchText
});

const mapDispatchToProps = dispatch => ({
    updateSearchText(text) {
        dispatch(updateSearchTextAction(text));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);