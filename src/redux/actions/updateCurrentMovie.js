const type = 'UPDATE_CURRENT_MOVIE';

const updateCurrentMovie = movie => ({type, payload: movie});

export default updateCurrentMovie;