const updateSearchText = text => {
    return {
        type: 'UPDATE_SEARCH_TEXT',
        payload: {text}
    };
}

export default updateSearchText;