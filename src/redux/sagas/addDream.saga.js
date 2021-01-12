import {takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* postDream(action) {
    console.log('Adding movie from user');
    try {
        yield axios.post('/api/movie', action.payload);
        console.log('------------------- ', action.payload);
        // yield getDream();

    } catch (error) {
        console.log('error with posting movie request', error);
    }
}


function* addDream() {
    yield takeLatest('POST_DREAM', postDream);
}

export default addDream;
