import React from 'react';
import { connect } from 'react-redux';

import Movie from '../Movie/Movie';

import './MovieList.css'

const MovieList = props => (
    <div className="movie-list">
        {props.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
);

const mapStateToProps = state => ({movies: state.movies});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);