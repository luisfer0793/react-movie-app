import React from 'react';
import { Link } from 'react-router-dom';

import './Movie.css';
import { useDispatch } from 'react-redux';

const Movie = (props) => {
    const dispatch = useDispatch();

    const styles = {
        backgroundImage: `url(${props.image})`,
    };

    const updateMovieId = () => {
        dispatch({
            type: 'UPDATE_CURRENT_MOVIE',
            payload: props.movie
        });
    }
    
    return (
        <div className="movie-card" style={styles}>
            <div className="movie-card-info">
                <h2 className="movie-title">{props.title}</h2>
                <div className="movie-description-container">
                    <div className="movie-badge-container">
                        <small className="movie-badge">Año {props.year}</small>
                        <small className="movie-badge">Clasificación {props.rating}</small>
                    </div>
                    <p className="movie-description">{props.description}</p>
                    <Link 
                        to={() => {return `/genre/${props.id}`}} 
                        className="movie-button" 
                        onClick={updateMovieId}>
                        Ver
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Movie;