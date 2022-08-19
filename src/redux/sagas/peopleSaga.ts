import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  put,
  call,
  fork,
  spawn,
  select,
} from "redux-saga/effects";
import { peopleAction, loadingAction } from "../applicationReducer/actions";

async function getData(dataSection: "people" | "planets") {
  const request = await fetch(`http://swapi.dev/api/${dataSection}`);
  const data = await request.json();
  console.log("data", data);
  return data;
}

async function getData2(dataSection: "people" | "planets") {
  const request = await fetch(`http://swapi.dev/api/${dataSection}`);
  const data = await request.json();
  console.log("data2", data);
  return data;
}

export function* workerSaga(): any {
  try {
    yield put(loadingAction({ isLoading: true }));
    //these ones will work as async await, because call and take block execution
    const data = yield call(getData, "planets"); //worker saga first, after that getData
    const data2 = yield call(getData2, "people"); //after worker saga data2, after that getData2

    //if we would execute sagas asynchonically we would use fork
    // const data = yield fork(getData, "planets") as any; //data first
    // const data2 = yield fork(getData2, "planets") as any; // after data2, after both getData,getData2 workers

    //if error happens in data, then data2 will not be executed. To do this anyway we must use spawn
    // const data = yield spawn(getData, "planets") as any;
    // const data2 = yield spawn(getData2, "planets") as any;

    // select gives access to store
    // const store = yield select(s => console.log('store', s));

    yield put(peopleAction(data.results));
    yield put(loadingAction({ isLoading: false }));
  } catch (error) {
    // do something with the error
  }
}

export function* watchClickSaga() {
  yield takeEvery("GET_PEOPLE_REQUEST", workerSaga);
}
