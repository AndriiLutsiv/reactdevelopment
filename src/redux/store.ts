import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootSaga } from "./rootSaga";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
