const currentMovieId = (state = 0, action) => {
    switch(action.type) {
        case 'UPDATE_MOVIE_ID':
            return state = action.payload.currentMovieId
        default:
            return state;
    }
}

export default currentMovieId;