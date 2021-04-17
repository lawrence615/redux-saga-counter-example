import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

import { INCREASE_COUNTER, DECREASE_COUNTER, SUCCESS_COUNTER } from 'store/types'


function* increaseCounterAsync(payload) {
  try {
    // Delay 4 Seconds
    yield delay(4000);

    // Dispatch Action To Redux Store
    yield put({ type: SUCCESS_COUNTER, value: payload.value });
  }
  catch (error) {
    // CHANGE LATER
    console.log(error);
  }
}

function* decreaseCounter(payload) {
  try {
    // Delay 4 Seconds
    // yield delay(4000);

    // Dispatch Action To Redux Store
    yield put({ type: SUCCESS_COUNTER, value: payload.value });
  }
  catch (error) {
    console.log(error);
  }
}


function* counterSaga() {
  yield takeLatest(INCREASE_COUNTER, increaseCounterAsync)
  yield takeLatest(DECREASE_COUNTER, decreaseCounter)
}

export default counterSaga