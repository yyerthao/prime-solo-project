import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* getDreamToUpdate(action) {
    try {
        // sending id of dream selected
        console.log('THIS is the movie you will update #:', action.payload);

        const response = yield axios.get(`/api/dream/${action.payload}`) // 
        yield put({
            type: 'SET_NEW_DREAM',
            payload: response.data
        })
    } catch (error) {
        console.log('GET ROUTE error from DB when attempting to get specific dream ID', error);
    }
}

function* genre() {
    yield takeLatest('GET_NEW_DREAM', getDreamToUpdate);
}

export default genre;
