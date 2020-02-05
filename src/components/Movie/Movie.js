import React from 'react';
import { Link } from 'react-router-dom';

import './Movie.css';

import store from '../../redux/store';
import updateCurrentMovie from '../../redux/actions/updateCurrentMovie';

const Movie = ({movie}) => {
    const styles = {
        backgroundImage: `url(${movie.image_large})`,
    };

    const updateMovie = () => {
        store.dispatch(updateCurrentMovie(movie));
    }
    
    return (
        <div className="movie-card" style={styles}>
            <div className="movie-card-info">
                <h2 className="movie-title">{movie.title}</h2>
                <div className="movie-description-container">
                    <div className="movie-badge-container">
                        <small className="movie-badge">Año {movie.year}</small>
                        <small className="movie-badge">Clasificación {movie.rating}</small>
                    </div>
                    <p className="movie-description">{movie.description}</p>
                    <Link 
                        to={() => {return `/genre/${movie.id}`}}
                        className="movie-button" 
                        onClick={updateMovie}>
                        Ver
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Movie;