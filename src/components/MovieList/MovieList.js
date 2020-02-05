import React from 'react';

import Movie from '../Movie/Movie';

import './MovieList.css'

const MovieList = props => (
    <div className="movie-list">
        {props.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
);

export default MovieList;