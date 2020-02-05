const type = 'FETCH_MOVIES';

const fetchMovies = movies => ({type, payload: movies});

export default fetchMovies;