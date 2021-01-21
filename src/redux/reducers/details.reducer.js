// has 1 specific dream from DB already 

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return action.payload;
        default:
            return state;
    }
}

export default details;