const afterDelete = (state = [], action) => {
    switch (action.type) {
        case 'AFTER_DELETE_DREAMS':
            return action.payload;
        default:
            return state;
    }
}

export default afterDelete;