import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import dream from './dream.reducer';
import genre from './genre.reducer';
import details from './details.reducer';
import update from './update.reducer';
import afterDelete from './afterDelete.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  dream, // accesses dreams from DB "dream" table
  genre, // accesses genre ids from DB "genre" table
  details,
  update,
  afterDelete
});

export default rootReducer;
