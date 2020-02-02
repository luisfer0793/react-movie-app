import React, { Component } from 'react';

import Movie from '../Movie/Movie';

import './MovieList.css'

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('props antes', prevProps);
        console.log('props ahora', this.props);
    }

    render() {
        return (
            <div className="movie-list">
                {this.props.movies.map(movie => {
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
}

export default MovieList;