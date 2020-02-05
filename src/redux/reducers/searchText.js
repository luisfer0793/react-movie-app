const searchText = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_TEXT':
            return state = action.payload;
        default:
            return state;
    }
}

export default searchText;