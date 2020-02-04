const filterMovies = movies => {
    return {
        type: 'FILTER_MOVIE_LIST',
        payload: movies
    };
}

export default filterMovies;