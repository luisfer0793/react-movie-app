const searchText = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_TEXT':
            return state = action.payload.text;
        default:
            return state;
    }
}

export default searchText;