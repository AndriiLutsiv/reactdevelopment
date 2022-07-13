export const DECREMENT_BY = "DECREMENT_BY";
export const INCREMENT_BY = "INCREMENT_BY";
export const LOADING = "LOADING";

export interface ApplicationState {
    counterValue: number;
    isLoading: boolean;
}

export interface IncrementPayload {
    incrementValue: number;
}

export interface DecrementPayload {
    decrementValue: number;
}

export interface LoadingPayload {
    isLoading: boolean;
}

export type IncrementActionType = {
    type: typeof INCREMENT_BY;
    payload: IncrementPayload;
};

export type DecrementActionType = {
    type: typeof DECREMENT_BY;
    payload: DecrementPayload;
};

export type LoadingActionType = {
    type: typeof LOADING;
    payload: LoadingPayload;
};

export type ApplicationActionsType =
    | IncrementActionType
    | DecrementActionType
    | LoadingActionType;
