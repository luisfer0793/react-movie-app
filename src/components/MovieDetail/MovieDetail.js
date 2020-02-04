import React from 'react';
import { useSelector } from 'react-redux';

import './MovieDetail.css';

const MovieDetail = (props) => {
    const movie = useSelector(state => state.currentMovie);

    return (
        <>
            <h2 className="movie-detail-title">{movie.title}</h2>
            <div className="movie-detail">
                <div className="movie-detail-image-box">
                    <img className="movie-detail-image" src={movie.image_large} alt="movie poster"/>
                </div>
                <div className="movie-detail-box">
                    <h4>{movie.title}</h4>
                    <small className="movie-detail-small">Año: {movie.year}</small>
                    <small className="movie-detail-small"> Duración: {movie.duration}</small>
                    <small className="movie-detail-small">Clasificación: {movie.rating_code}</small>
                    <p className="movie-detail-text">Episodio: <span>{movie.title_episode}</span></p>
                    <p className="movie-detail-text">{movie.description_large}</p>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;