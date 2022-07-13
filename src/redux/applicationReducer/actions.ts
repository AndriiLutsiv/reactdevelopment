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

export const decrementAction = (
    payload: DecrementPayload
): DecrementActionType => ({
    type: DECREMENT_BY,
    payload: payload,
});

export const incrementAction = (
    payload: IncrementPayload
): IncrementActionType => ({
    type: INCREMENT_BY,
    payload: payload,
});

export const loadingAction = (payload: LoadingPayload): LoadingActionType => ({
    type: LOADING,
    payload: payload,
});
