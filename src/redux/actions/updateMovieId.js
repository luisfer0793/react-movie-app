const updateCurrentMovie = movie => {
    return {
        type: 'UPDATE_MOVIE_ID',
        payload: movie
    };
}

export default updateCurrentMovie;