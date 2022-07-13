import React, { useEffect, useState } from "react";
import styles from "./redux-old.module.css";
import { RootState } from "../../redux/store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
    decrementAction,
    incrementAction,
    loadingAction,
} from "../../redux/applicationReducer/actions";
import {
    IncrementPayload,
    DecrementPayload,
    LoadingPayload,
} from "../../redux/applicationReducer/types";
import { Spinner } from "../spinner";

const axios = require("axios").default;

interface StateProps {
    counterValue: number;
    isLoading: boolean;
}

interface DispatchProps {
    incrementAction: (payload: IncrementPayload) => void;
    decrementAction: (payload: DecrementPayload) => void;
    loadingAction: (payload: LoadingPayload) => void;
}

interface OwnProps {}

type Props = StateProps & OwnProps & DispatchProps;
// class ReduxOld extends React.Component<Props, OwnState> {
const ReduxOld: React.FC<Props> = (props) => {
    const {
        counterValue,
        incrementAction,
        decrementAction,
        isLoading,
        loadingAction,
    } = props;

    const [users, setUsers] = useState([]);

    const fetchData = () => {
        loadingAction({ isLoading: true });
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response: any) => {
                // handle success
                setUsers(response.data);
                loadingAction({ isLoading: false });
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
                loadingAction({ isLoading: false });
            });
    };

    const handleAdd = () => {
        incrementAction({ incrementValue: 4 });
    };

    const handleRemove = () => {
        decrementAction({ decrementValue: 5 });
    };
    console.log("isLoading", isLoading);
    return (
        <div className={styles.reduxOldRoot}>
            <h1>Old redux</h1>
            <button onClick={handleAdd}>Add</button>
            <div>Counter: {counterValue}</div>
            <button onClick={handleRemove}>Remove</button> <br />
            <button onClick={fetchData}>Fetch Data</button>
            <ol className={styles.usersList}>
                {isLoading && <Spinner />}

                {users.map((user: any) => (
                    <div key={user.id}>{user.name}</div>
                ))}
            </ol>
        </div>
    );
};

const mapStateToProps = (appState: RootState): StateProps => {
    return {
        counterValue: appState.applicationReducer.counterValue,
        isLoading: appState.applicationReducer.isLoading,
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch,
    ownProps: OwnProps
): DispatchProps => ({
    incrementAction: (payload) => dispatch(incrementAction(payload)),
    decrementAction: (payload) => dispatch(decrementAction(payload)),
    loadingAction: (payload) => dispatch(loadingAction(payload)),
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(ReduxOld);
