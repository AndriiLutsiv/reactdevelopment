import {
  DECREMENT_BY,
  INCREMENT_BY,
  LOADING,
  SET_PEOPLE,
  INCREMENT_SAGA_BY,
  DECREMENT_SAGA_BY,
  DecrementPayload,
  DecrementActionType,
  IncrementPayload,
  IncrementActionType,
  IncrementSagaPayload,
  DecrementSagaPayload,
  IncrementSagaActionType,
  DecrementSagaActionType,
  LoadingPayload,
  LoadingActionType,
  PeoplePayload,
  PeopleActionType,
} from "./types";
import { Action, ActionCreator, Dispatch } from "redux";

export const decrementAction: ActionCreator<Action> = (
  payload: DecrementPayload
): DecrementActionType => ({
  type: DECREMENT_BY,
  payload: payload,
});

export const incrementAction: ActionCreator<Action> = (
  payload: IncrementPayload
): IncrementActionType => ({
  type: INCREMENT_BY,
  payload: payload,
});

export const incrementSagaAction: ActionCreator<Action> = (
  payload: IncrementSagaPayload
): IncrementSagaActionType => ({
  type: INCREMENT_SAGA_BY,
  payload: payload,
});

export const decrementSagaAction: ActionCreator<Action> = (
  payload: DecrementSagaPayload
): DecrementSagaActionType => ({
  type: DECREMENT_SAGA_BY,
  payload: payload,
});

export const loadingAction: ActionCreator<Action> = (
  payload: LoadingPayload
): LoadingActionType => ({
  type: LOADING,
  payload: payload,
});

export const peopleAction: ActionCreator<Action> = (
  payload: PeoplePayload
): PeopleActionType => {
  return {
    type: SET_PEOPLE,
    payload: payload,
  };
};
