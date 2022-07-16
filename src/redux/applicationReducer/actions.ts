import {
    DECREMENT_BY,
    INCREMENT_BY,
    LOADING,
    DecrementPayload,
    DecrementActionType,
    IncrementPayload,
    IncrementActionType,
    LoadingPayload,
    LoadingActionType,
} from "./types";
import { Action, ActionCreator, Dispatch } from "redux";

export const decrementAction: ActionCreator<Action> = (payload: DecrementPayload): DecrementActionType => ({
    type: DECREMENT_BY,
    payload: payload,
});

export const incrementAction: ActionCreator<Action> = (payload: IncrementPayload): IncrementActionType => ({
    type: INCREMENT_BY,
    payload: payload,
});

export const loadingAction: ActionCreator<Action> = (payload: LoadingPayload): LoadingActionType => ({
    type: LOADING,
    payload: payload,
});
