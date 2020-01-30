import React from 'react';

import './Movie.css';

const Movie = props => {
    const styles = {
        backgroundImage: `url(${props.image})`,
    };
    
    return (
        <div className="movie-card" style={styles}>
            <h2 className="movie-id">{props.id}</h2>
            <p className="movie-title">{props.title}</p>
        </div>
    );
}

export default Movie;