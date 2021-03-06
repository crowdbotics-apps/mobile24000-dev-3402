import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth3123Saga from '../features/EmailAuth3123/redux/sagas';
import EmailAuth3121Saga from '../features/EmailAuth3121/redux/sagas';
import EmailAuth3120Saga from '../features/EmailAuth3120/redux/sagas';
import EmailAuth3118Saga from '../features/EmailAuth3118/redux/sagas';
import EmailAuth3057Saga from '../features/EmailAuth3057/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth3123Saga,
EmailAuth3121Saga,
EmailAuth3120Saga,
EmailAuth3118Saga,
EmailAuth3057Saga,
    
  ]);
}