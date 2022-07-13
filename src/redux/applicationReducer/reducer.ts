import {
    ApplicationState,
    DECREMENT_BY,
    INCREMENT_BY,
    LOADING,
    ApplicationActionsType,
} from "./types";

const initialState: ApplicationState = {
    counterValue: 0,
    isLoading: false,
};

const applicationReducer = (
    state = initialState,
    action: ApplicationActionsType
): ApplicationState => {
    switch (action.type) {
        case DECREMENT_BY:
            return {
                ...state,
                counterValue:
                    state.counterValue - action.payload.decrementValue,
            };
        case INCREMENT_BY:
            return {
                ...state,
                counterValue:
                    state.counterValue + action.payload.incrementValue,
            };
        case LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        default:
            return {
                ...state,
            };
    }
};

export default applicationReducer;
