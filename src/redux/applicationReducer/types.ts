export const DECREMENT_BY = "DECREMENT_BY";
export const INCREMENT_BY = "INCREMENT_BY";
export const INCREMENT_SAGA_BY = "INCREMENT_SAGA_BY";
export const DECREMENT_SAGA_BY = "DECREMENT_SAGA_BY";
export const LOADING = "LOADING";
export const SET_PEOPLE = "SET_PEOPLE";

export interface ApplicationState {
  counterValue: number;
  isLoading: boolean;
  people: any[];
  sagaCounterValue: number;
}

export interface IncrementPayload {
  incrementValue: number;
}

export interface IncrementSagaPayload {
  incrementValue: number;
}

export interface DecrementPayload {
  decrementValue: number;
}

export interface DecrementSagaPayload {
  decrementValue: number;
}

export interface LoadingPayload {
  isLoading: boolean;
}

export type PeoplePayload = any[];

export type IncrementActionType = {
  type: typeof INCREMENT_BY;
  payload: IncrementPayload;
};

export type DecrementActionType = {
  type: typeof DECREMENT_BY;
  payload: DecrementPayload;
};

export type IncrementSagaActionType = {
  type: typeof INCREMENT_SAGA_BY;
  payload: IncrementSagaPayload;
};

export type DecrementSagaActionType = {
  type: typeof DECREMENT_SAGA_BY;
  payload: DecrementSagaPayload;
};

export type LoadingActionType = {
  type: typeof LOADING;
  payload: LoadingPayload;
};

export type PeopleActionType = {
  type: typeof SET_PEOPLE;
  payload: PeoplePayload;
};

export type ApplicationActionsType =
  | IncrementActionType
  | DecrementActionType
  | LoadingActionType
  | PeopleActionType
  | IncrementSagaActionType
  | DecrementSagaActionType;
