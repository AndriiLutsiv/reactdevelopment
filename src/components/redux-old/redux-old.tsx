import React, { useEffect, useState } from "react";
import styles from "./redux-old.module.css";
import { RootState } from "../../redux/store";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { decrementAction, incrementAction, loadingAction } from "../../redux/applicationReducer/actions";
import { IncrementPayload, DecrementPayload, LoadingPayload } from "../../redux/applicationReducer/types";
import { Spinner } from "../spinner";
import { usersThunk } from "../../redux/applicationReducer/thunks";
import { ThunkDispatch } from "redux-thunk";
import { addValue, subtractValue } from "../../constants";

interface StateProps {
    counterValue: number;
    isLoading: boolean;
}

interface DispatchProps {
    incrementAction: (payload: IncrementPayload) => void;
    decrementAction: (payload: DecrementPayload) => void;
    loadingAction: (payload: LoadingPayload) => void;
    usersThunk: (payload: React.Dispatch<React.SetStateAction<never[]>>) => void;
}

interface OwnProps {}

// interface OwnState {} // for class components

type Props = StateProps & OwnProps & DispatchProps;
// class ReduxOld extends React.Component<Props, OwnState> {
const ReduxOld: React.FC<Props> = (props) => {
    const { counterValue, incrementAction, decrementAction, isLoading, loadingAction, usersThunk } = props;

    const [users, setUsers] = useState([]);
    const [post, setPost] = useState("");
    const [album, setAlbum] = useState("");
    const [toDo, setTodo] = useState("");
    const [photo, setPhoto] = useState("");

    const handleAdd = () => incrementAction({ incrementValue: addValue });

    const handleRemove = () => decrementAction({ decrementValue: subtractValue });

    const fetchUsers = () => usersThunk(setUsers);

    const clearUsers = () => setUsers([]);

    return (
        <div className={styles.reduxOldRoot}>
            <h1>Old redux</h1>
            <section className={styles.box1}>
                <h2>counter with redux actions</h2>
                <button onClick={handleAdd}>Add +{addValue}</button>
                <div>Counter: {counterValue}</div>
                <button onClick={handleRemove}>Remove -{subtractValue}</button> <br />
            </section>

            <section className={styles.box2}>
                <h2>simple async redux-thunk</h2>
                <button onClick={fetchUsers}>fetch users</button>
                <button onClick={clearUsers}>clear users</button>
                <ol className={styles.usersList}>
                    {isLoading && <Spinner />}

                    {users.map((user: any) => (
                        <div key={user.id}>{user.name}</div>
                    ))}
                </ol>
            </section>

            <section className={styles.box3}>
                <h2>consiquent redux-thunk</h2>
                <div className={styles.box3item}>
                    <div className={styles.box3_title}>album:</div>
                    <div className={styles.box3_subtitle}></div>
                </div>
                <div className={styles.box3item}>
                    <div className={styles.box3_title}>post:</div>
                    <div className={styles.box3_subtitle}></div>
                </div>
                <div className={styles.box3item}>
                    <div className={styles.box3_title}>toDo:</div>
                    <div className={styles.box3_subtitle}></div>
                </div>
                <div className={styles.box3item}>
                    <div className={styles.box3_title}>photo:</div>
                    <div className={styles.box3_subtitle}></div>
                </div>
            </section>
        </div>
    );
};

const mapStateToProps = (appState: RootState, ownProps: OwnProps): StateProps => {
    return {
        counterValue: appState.applicationReducer.counterValue,
        isLoading: appState.applicationReducer.isLoading,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, Action>, ownProps: OwnProps): DispatchProps => ({
    incrementAction: (payload) => dispatch(incrementAction(payload)),
    decrementAction: (payload) => dispatch(decrementAction(payload)),
    loadingAction: (payload) => dispatch(loadingAction(payload)),
    usersThunk: (payload) => dispatch(usersThunk(payload)),
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(ReduxOld);
