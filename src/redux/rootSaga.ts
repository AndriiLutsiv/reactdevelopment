import { all, spawn } from "redux-saga/effects";

import { watchClickSaga } from "./sagas/peopleSaga";
import { watchCounterSaga } from "./sagas/counterSaga";
import { loadBasicData } from "./sagas/initSaga";

// better use spawn for root saga, because if error in one saga occures it won`t block other sagas
export function* rootSaga() {
  yield all([
    spawn(watchClickSaga),
    spawn(watchCounterSaga),
    spawn(loadBasicData),
  ]);
}
