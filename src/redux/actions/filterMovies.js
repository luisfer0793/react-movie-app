const type = 'FILTER_MOVIE_LIST';

const filterMovies = movies => ({type, payload: movies});

export default filterMovies;