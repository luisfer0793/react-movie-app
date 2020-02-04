const fetchMovies = movies => {
    return {
        type: 'FETCH_MOVIES',
        payload: movies
    };
}

export default fetchMovies;