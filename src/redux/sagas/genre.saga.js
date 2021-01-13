import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* getGenre(){
    console.log('Fetching genre');
    try{
        const response = yield axios.get('/api/genre')
        yield put({type: 'SET_GENRE', payload: response.data})
    } catch(error){
        console.log('error with genre fetch request', error);
    }
}

function* genre() {
    yield takeLatest('FETCH_GENRE', getGenre);
}

export default genre;
