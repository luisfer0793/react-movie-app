const updateGenre = genreId => {
    return {
        type: 'UPDATE_GENRE',
        payload: genreId
    };
}

export default updateGenre;