import { takeEvery, put } from "redux-saga/effects";
import {} from "../applicationReducer/types";
import {
  incrementSagaAction,
  decrementAction,
  decrementSagaAction,
} from "../applicationReducer/actions";

function* workerAddSaga(data: { type: string; data: number }) {
  console.log("workerAddSaga", data);
  yield put(incrementSagaAction({ incrementValue: data.data }));
}

function* workerRemoveSaga(data: { type: string; data: number }) {
  yield put(decrementSagaAction({ decrementValue: data.data }));
}

export function* watchCounterSaga() {
  yield takeEvery("INCR_REQUEST", workerAddSaga);
  yield takeEvery("DECR_REQUEST", workerRemoveSaga);
}
