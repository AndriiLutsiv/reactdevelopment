import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  put,
  call,
} from "redux-saga/effects";
import { peopleAction, loadingAction } from "../applicationReducer/actions";

async function getData(dataSection: "people" | "planets") {
  const request = await fetch(`http://swapi.dev/api/${dataSection}`);
  const data = await request.json();
  console.log("data", data);
  return data;
}

export function* workerSaga(): any {
  yield put(loadingAction({ isLoading: true }));
  const data = yield call(getData, "planets") as any;

  yield put(peopleAction(data.results));
  yield put(loadingAction({ isLoading: false }));
}

export function* watchClickSaga() {
  yield takeEvery("GET_PEOPLE", workerSaga);
}
