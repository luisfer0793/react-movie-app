const currentGenre = (state = 43861, action) => {
    switch(action.type) {
        case 'UPDATE_GENRE':
            return state = action.payload;
        default:
            return state;
    }
}

export default currentGenre;