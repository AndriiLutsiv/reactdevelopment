// here is an example when we need some data trhoughout the app and must do it once log in
import { fork, call, put, all, delay } from "redux-saga/effects";

function* auth() {
  delay(2000);
  return true;
}

function* loadPlanets(): any {
  try {
    const request = yield call(fetch, `http://swapi.dev/api/planets`);
    const data = yield call([request, request.json]);
    console.log("loadPlanets", data);
    //some dispatches to reducer here
  } catch (error) {
    //some dispatches with error to reducer here (if needed)
  }
}

export function* loadBasicData() {
  yield all([fork(auth), fork(loadPlanets)]);
}
