import React from 'react';

import './Movie.css';

const Movie = (props) => {
    const styles = {
        backgroundImage: `url(${props.image})`,
    };
    
    const show = () => {
        console.log(props);
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
                </div>
            </div>
        </div>
    );
}

export default Movie;