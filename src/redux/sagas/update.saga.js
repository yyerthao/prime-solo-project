import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';



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


// ---------------------------------- UPDATING NEW DREAM 
function* updateDream(action) {
    console.log('UPDATING dream from user', action);
    try {
        yield axios.put(`/api/dream/${action.payload.id}`, action.payload);
        console.log('THIS is the dream are trying to update SAGA#:', action);
        console.log('This is the NEW dream sent to DB', action.payload);
        yield put({type:'FETCH_DREAM'});
    } catch (error) {
        console.log('PUT ROUTE error', error);
    }
}


// ---------------------------------- DELETING NEW DREAM 

function* getDreamToDelete(action) {
    console.log('Deleting dream from user', action);
    try {
        yield axios.put(`/api/dream/${action.payload.id}`, action.payload);
        console.log('THIS is the dream are trying to update SAGA#:', action);
        console.log('This is the NEW dream sent to DB', action.payload);
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
    yield takeLatest('DELETE_DREAM', getDreamToDelete)

}

export default genre;
