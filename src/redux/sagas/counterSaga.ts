import { takeEvery, put } from "redux-saga/effects";
import {
  INCREMENT_SAGA_BY,
  DECREMENT_SAGA_BY,
} from "../applicationReducer/types";
import {
  incrementSagaAction,
  decrementAction,
  decrementSagaAction,
} from "../applicationReducer/actions";

function* workerAddSaga(data: { type: string; data: number }) {
  yield put(incrementSagaAction({ incrementValue: data.data }));
}

function* workerRemoveSaga(data: { type: string; data: number }) {
  yield put(decrementSagaAction({ decrementValue: data.data }));
}

export function* watchCounterSaga() {
  yield takeEvery("INCR", workerAddSaga);
  yield takeEvery("DECR", workerRemoveSaga);
}
