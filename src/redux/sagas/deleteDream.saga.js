import {takeLatest } from 'redux-saga/effects';
import axios from 'axios';




// ---------------------------------- DELETING :: DELETING NEW DREAM 
function* getDreamToDelete(action) { //action = ID of dream to delete
    console.log('DELETING dream from user', action.payload); //action.payload = ID of dream to delete OK!
    try {
        yield axios.delete(`api/dream/${action.payload}`);
        console.log('SAGA: Details of dream you are trying to delete:', action.payload)
    } catch (error) {
        console.log('DELETE ROUTE error', error);
    }
}



function* deleteDream() {
    // getting dream to delete with saga function below
    yield takeLatest('DELETE_DREAM', getDreamToDelete);
}

export default deleteDream;
