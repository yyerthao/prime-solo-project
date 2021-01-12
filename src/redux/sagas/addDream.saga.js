import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* registrationSaga() {
    yield takeLatest('POST_DREAM', postDream);
}

export default registrationSaga;
