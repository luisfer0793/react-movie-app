import React, {useEffect, useRef} from 'react';
import { connect, useDispatch } from 'react-redux';

import updateSearchText from '../../redux/actions/updateSearchText';

import './Filter.css';

const Filter = props => {
    const dispatch = useDispatch();
    
    let inputRef = useRef();
    
    useEffect(() => {
        inputRef.current.value = '';
        dispatch(updateSearchText(''));
    }, [props.currentGenre]);
    
    const updateText = () => dispatch(updateSearchText(inputRef.current.value));

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
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);