import {
  ApplicationState,
  DECREMENT_BY,
  INCREMENT_BY,
  LOADING,
  SET_PEOPLE,
  ApplicationActionsType,
  INCREMENT_SAGA_BY,
  DECREMENT_SAGA_BY,
} from "./types";

const initialState: ApplicationState = {
  counterValue: 0,
  isLoading: false,
  people: [],
  sagaCounterValue: 0,
};

const applicationReducer = (
  state = initialState,
  action: ApplicationActionsType
): ApplicationState => {
  switch (action.type) {
    case DECREMENT_BY:
      return {
        ...state,
        counterValue: state.counterValue - action.payload.decrementValue,
      };
    case INCREMENT_BY:
      return {
        ...state,
        counterValue: state.counterValue + action.payload.incrementValue,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case SET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case INCREMENT_SAGA_BY:
      return {
        ...state,
        sagaCounterValue:
          state.sagaCounterValue + action.payload.incrementValue,
      };
    case DECREMENT_SAGA_BY:
      return {
        ...state,
        sagaCounterValue:
          state.sagaCounterValue - action.payload.decrementValue,
      };
    default:
      return {
        ...state,
      };
  }
};
export default applicationReducer;
