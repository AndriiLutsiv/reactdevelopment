import { ApplicationState } from "./applicationReducer/types";
import { combineReducers } from "redux";
import applicationReducer from "./applicationReducer/reducer";

export interface RootState {
  applicationReducer: ApplicationState;
}

export const rootReducer = combineReducers<RootState>({
  applicationReducer,
});
