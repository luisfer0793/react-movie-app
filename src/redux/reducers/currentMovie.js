const currentMovie = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT_MOVIE':
            return state = action.payload
        default:
            return state;
    }
}

export default currentMovie;