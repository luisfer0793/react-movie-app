import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';

import store from '../../redux/store';
import updateSearchText from '../../redux/actions/updateSearchText';

import './Filter.css';

const Filter = props => {
    let inputRef = useRef();
    
    useEffect(() => {
        inputRef.current.value = '';
    }, [props.currentGenre]);
    
    const updateText = () => store.dispatch(updateSearchText(inputRef.current.value));

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

const mapStateToProps = state => ({currentGenre: state.currentGenre});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);