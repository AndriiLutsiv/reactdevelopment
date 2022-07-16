import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import applicationReducer from "./applicationReducer/reducer";
import thunk from "redux-thunk";
import { ApplicationState } from "./applicationReducer/types";

export interface RootState {
    applicationReducer: ApplicationState;
}

const store = createStore(
    combineReducers<RootState>({
        applicationReducer,
    }),
    applyMiddleware(thunk)
);
export default store;
