import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import applicationReducer from "./applicationReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    applicationReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
