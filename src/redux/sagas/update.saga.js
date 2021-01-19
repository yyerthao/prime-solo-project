import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';


// --------------------------------------- GET:: GETTING DREAM TO UPDATE
function* getDreamToUpdate(action) {
    try {
        // sending id of dream selected
        console.log('THIS is the dream you will update #:', action.payload);

        const response = yield axios.get(`/api/dream/${action.payload}`, action.payload) // 
        yield put({
            type: 'SET_NEW_DREAM',
            payload: response.data
        })
    } catch (error) {
        console.log('GET ROUTE error from DB when attempting to get specific dream ID', error);
    }
}


// ---------------------------------- PUT :: UPDATING NEW DREAM 
function* updateDream(action) {
    console.log('UPDATING dream from user', action.payload);
    try {
        yield axios.put(`/api/dream/${action.payload.id}`, action.payload);
        console.log('SAGA: Details of dream you are trying to update:', action.payload)
        console.log('This is the ID NEW dream sent to DB', action.payload.id);
        yield put({type:'FETCH_DREAM'});
    } catch (error) {
        console.log('PUT ROUTE error', error);
    }
}


// ---------------------------------- DELETING NEW DREAM 

function* getDreamToDelete(action) {
    console.log('Deleting dream from user', action);
    try {
        yield axios.delete(`/api/dream/${action.payload.id}`, action.payload);
        console.log('SAGA DELETE dream', action);
        console.log('SAGA DELETE dream', action.payload);
        yield put({
            type: 'DREAMS_AFTER_DELETE'
        });
    } catch (error) {
        console.log('DELETE ROUTE error', error);
    }
}




function* genre() {
    yield takeLatest('GET_NEW_DREAM', getDreamToUpdate);
    yield takeLatest('UPDATE_DREAM', updateDream);
    // getting dream to delete with saga function below
    yield takeLatest('DELETE_DREAM', getDreamToDelete)

}

export default genre;
