const type = 'UPDATE_GENRE';

const updateGenre = genreId => ({type, payload: genreId});

export default updateGenre;