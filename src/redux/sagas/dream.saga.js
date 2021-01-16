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
        console.log('--------------------------- ', action.payload);
        yield getDream();
    } catch (error) {
        console.log('error with posting dream request', error);
    }
}


// --------------------------------------- COME BACK HERE AND FINISH GET ROUTE BY ID:
function* getDetail(action) {
    console.log('Fetching dream by id');
    try {
        // sending id of dream selected
        const response = yield axios.get('/api/dream/' + action.payload)
        yield put({
            type: 'SET_DETAIL',
            payload: response.data
        })
    } catch (error) {
        console.log('--------- error with DREAM fetch request', error);
    }
}



function* dream() {
    yield takeLatest('POST_DREAM', postDream);
    yield takeLatest('FETCH_DREAM', getDream);
    yield takeLatest('GET_DETAIL', getDetail)
}

export default dream;
