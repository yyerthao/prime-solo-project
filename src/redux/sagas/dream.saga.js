import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* getDream() {
    console.log('Fetching dream');
    try{
        const response = yield axios.get('/api/dream')
        yield put({type: 'SET_DREAM', payload: response.data})
    } catch(error){
        console.log('error with dream fetch request', error);
    }        
}

function* postDream(action) {
    console.log('Adding dream from user');
    try {
        yield axios.post('/api/dream', action.payload);
        console.log('------------------- ', action.payload);
        yield getDream();
    } catch (error) {
        console.log('error with posting dream request', error);
    }
}


function* dream() {
    yield takeLatest('POST_DREAM', postDream);
}

export default dream;
