import React from 'react';
import { connect, useSelector } from 'react-redux';

import Movie from '../Movie/Movie';

import './MovieList.css'

const MovieList = props => {
    const movies = useSelector(state => state.movies);

    const paintMovies = () => movies.map(movie => {
        return (
            <Movie 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                image={movie.image_large}
                description={movie.description}
                year={movie.year}
                rating={movie.rating_code}
                movie={movie}
            />
        )
    });

    return (
        <div className="movie-list">
            {paintMovies()}
        </div>
    );
}
export default MovieList;