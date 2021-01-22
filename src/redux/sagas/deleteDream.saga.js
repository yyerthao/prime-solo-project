import {takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// function* dreamsAfterDelete() {
//     console.log('Fetching dream from DB working OK');
//     try {
//         const response = yield axios.get('/api/dream')
//         yield put({
//             type: 'AFTER_DELETE_DREAMS',
//             payload: response.data
//         })
//     } catch (error) {
//         console.log('error with dream fetch request', error);
//     }
// }

// function* getDreamToDelete(action) { // action = ID of dream to delete from DB
//   console.log('ACTION.PAYLOAD: ', action.payload); // ID of dream to delete, just testing here
//   try {
//     yield axios.delete('/api/dream', action.payload); // api/dream 
//     yield dreamsAfterDelete(); // this will set dream again 
//   } catch (error) {
//     console.error('Error with deleting dream data in saga', error);
//   }
// }




// ---------------------------------- DELETING :: DELETING NEW DREAM 
function* getDreamToDelete(action) { //action = ID of dream to delete
    console.log('DELETING dream from user', action.payload); //action.payload = ID of dream to delete OK!
    try {
        yield axios.delete(`api/dream/${action.payload}`);
        console.log('SAGA: Details of dream you are trying to delete:', action.payload)
    } catch (error) {
        console.log('DELETE ROUTE error', error);
    }
}






function* deleteDream() {
    // getting dream to delete with saga function below
    yield takeLatest('DELETE_DREAM', getDreamToDelete);
}

export default deleteDream;
