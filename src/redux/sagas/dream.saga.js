import {takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* postDream(action) {
    console.log('Adding dream from user');
    try {
        yield axios.post('/api/dream', action.payload);
        console.log('------------------- ', action.payload);
        // yield getDream();

    } catch (error) {
        console.log('error with posting dream request', error);
    }
}


function* dream() {
    yield takeLatest('POST_DREAM', postDream);
}

export default dream;
