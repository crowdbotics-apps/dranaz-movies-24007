import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth195628Saga from '../features/EmailAuth195628/redux/sagas';
import CalendarView195626Saga from '../features/CalendarView195626/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth195628Saga,
CalendarView195626Saga,
    
  ]);
}