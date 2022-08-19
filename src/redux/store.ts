import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootSaga } from "./rootSaga";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
