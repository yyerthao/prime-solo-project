const updatedDream = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NEW_DREAM':
            return action.payload;
        default:
            return state;
    }
}

export default updatedDream;