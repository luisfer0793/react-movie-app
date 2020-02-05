const movies = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MOVIES':
            return [...action.payload];
        case 'FILTER_MOVIE_LIST':
            return [...action.payload];
        default:
            return state;
    }
}

export default movies;