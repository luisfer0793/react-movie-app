import React from 'react';

import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './Movie.css';

import updateCurrentMovieAction from '../../redux/actions/update-current-movie-action';

const Movie = props => {
    const styles = {
        backgroundImage: `url(${props.movie.image_large})`,
    };

    const updateMovie = () => props.updateCurrentMovie(props.movie);
    
    return (
        <div className="movie-card" style={styles}>
            <div className="movie-card-info">
                <h2 className="movie-title">{props.movie.title}</h2>
                <div className="movie-description-container">
                    <div className="movie-badge-container">
                        <small className="movie-badge">Año {props.movie.year}</small>
                        <small className="movie-badge">Clasificación {props.movie.rating}</small>
                    </div>
                    <p className="movie-description">{props.movie.description}</p>
                    <Link 
                        to={() => {return `/genre/${props.movie.id}`}}
                        className="movie-button" 
                        onClick={updateMovie}>
                        Ver
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    updateCurrentMovie(movie) {
        dispatch(updateCurrentMovieAction(movie));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);