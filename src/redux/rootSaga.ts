import { all, fork } from "redux-saga/effects";

import { watchClickSaga } from "./sagas/peopleSaga";
import { watchCounterSaga } from "./sagas/counterSaga";

export function* rootSaga() {
  yield all([fork(watchClickSaga), fork(watchCounterSaga)]);
}
