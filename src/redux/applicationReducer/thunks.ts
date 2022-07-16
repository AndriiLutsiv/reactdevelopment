import { loadingAction } from "./actions";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

const axios = require("axios").default;

// the below thunk takes setState thus we set something locally, not in reducer
export const usersThunk = (setUsers: React.Dispatch<React.SetStateAction<never[]>>) => {
    return async (dispatch: Dispatch, getState: any) => {
        dispatch(loadingAction({ isLoading: true }));
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response: any) => {
                // handle success
                setUsers(response.data);
                dispatch(loadingAction({ isLoading: false }));
            })
            .catch(function (error: any) {
                // handle error
                console.log(error.message);
                dispatch(loadingAction({ isLoading: false }));
            });
    };
};

// export const flowThunk;
