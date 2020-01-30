import React from 'react';

import Movie from './Movie/Movie';

import './MovieList.css'

const MovieList = props => {
    return (
        <div className="movie-list">
            {props.movies.map(movie => {
                return (
                    <Movie id={movie.id} title={movie.title} image={movie.image_large} key={movie.id}/>
                );
            })}
        </div>
    );
}

export default MovieList;