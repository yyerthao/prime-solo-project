import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* getDream() {
    console.log('Fetching dream from DB working OK');
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
        console.log('This is the dream sent to DB', action.payload);
        yield getDream();
    } catch (error) {
        console.log('POST ROUTE error from DB when attempting to post a dream to DB', error);
    }
}


// --------------------------------------- COME BACK HERE AND FINISH GET ROUTE BY ID:
function* getDetail(action) {
    try {
        // sending id of dream selected
        console.log('You\'ve chosen a dream with ID #:', action.payload);
        
        const response = yield axios.get(`/api/dream/${action.payload}`) // 
        yield put({
            type: 'SET_DETAIL',
            payload: response.data
        })
    } catch (error) {
        console.log('GET ROUTE error from DB when attempting to get specific dream ID', error);
    }
}



function* dream() {
    yield takeLatest('POST_DREAM', postDream);
    yield takeLatest('FETCH_DREAM', getDream);
    yield takeLatest('GET_DETAIL', getDetail)
}

export default dream;
