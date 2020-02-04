import React, { Component } from 'react';

import Movie from '../Movie/Movie';

import './MovieList.css'

const MovieList = props => {
    return (
        <div className="movie-list">
            {props.movies.map(movie => {
                return (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        image={movie.image_large}
                        description={movie.description}
                        year={movie.year}
                        rating={movie.rating_code}
                    />
                );
            })}
        </div>
    );
}


export default MovieList;