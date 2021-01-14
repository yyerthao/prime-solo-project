const dreamReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DREAM':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default dreamReducer;
