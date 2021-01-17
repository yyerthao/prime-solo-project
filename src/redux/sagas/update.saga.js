import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* getDreamToUpdate() {
    console.log('Fetching dream');
    try {
        const response = yield axios.get('/api/dream')
        yield put({
            type: 'SET_NEW_DREAM',
            payload: response.data
        })
    } catch (error) {
        console.log('error with dream fetch request', error);
    }
}

function* genre() {
    yield takeLatest('GET_NEW_DREAM', getDreamToUpdate);
}

export default genre;
