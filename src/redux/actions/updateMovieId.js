const updateMovieId = (id) => {
    return {
        type: 'UPDATE_MOVIE_ID',
        payload: {currentMovieId: id}
    };
}

export default updateMovieId;