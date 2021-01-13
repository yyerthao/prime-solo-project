const genreReducer = (state = {}, action) => {
  switch (action.type) {
      case 'SET_GENRE':
          return action.payload;
      default:
          return state;
    }
  };

// user will be on the redux state at:
// state.genre
export default genreReducer;
