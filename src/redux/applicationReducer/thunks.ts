import { loadingAction } from "./actions";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

const axios = require("axios").default;

// the below thunk takes setState thus we set something locally, not in reducer
export const usersThunk = (setUsers: React.Dispatch<React.SetStateAction<never[]>>) => {
    return (dispatch: Dispatch, getState: Function) => {
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

// https://github.com/reduxjs/redux-thunk
export const subsiquentDataThunk = (
    setAlbum: React.Dispatch<React.SetStateAction<string>>,
    setPost: React.Dispatch<React.SetStateAction<string>>,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    setPhoto: React.Dispatch<React.SetStateAction<string>>
) => {
    return async (dispatch: Dispatch, getState: Function) => {
        try {
            const response1 = await axios.get("https://jsonplaceholder.typicode.com/albums/1");
            setAlbum(response1.data.title);

            const promise1 = new Promise(async (resolve): Promise<any> => {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
                resolve(response.data.title);
            });

            const promise2 = new Promise(async (resolve): Promise<any> => {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
                resolve(response.data.title);
            });

            const promiseTimeout = new Promise((resolve) => setTimeout(() => resolve(1), 3000));

            const promises: [any, any, any] = await Promise.all([promise1, promise2, promiseTimeout]);
            setPost(promises[0]);
            setTodo(promises[1]);

            const response2 = await axios.get("https://jsonplaceholder.typicode.com/photos/1");
            setPhoto(response2.data.thumbnailUrl);
        } catch (error) {
            console.log(error);
        }
    };
};
