import React, { useEffect, useState } from "react";
import styles from "./redux-old.module.css";
import { RootState } from "../../redux/store";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { decrementAction, incrementAction, loadingAction } from "../../redux/applicationReducer/actions";
import { IncrementPayload, DecrementPayload, LoadingPayload } from "../../redux/applicationReducer/types";
import { Spinner } from "../spinner";
import { usersThunk, subsiquentDataThunk } from "../../redux/applicationReducer/thunks";
import { ThunkDispatch } from "redux-thunk";
import { addValue, subtractValue } from "../../constants";

interface StateProps {
    counterValue: number;
    isLoading: boolean;
}

interface DispatchProps {
    incrementAction: (payload: IncrementPayload) => void;
    decrementAction: (payload: DecrementPayload) => void;
    usersThunk: (payload: React.Dispatch<React.SetStateAction<never[]>>) => void;
    subsiquentDataThunk: (
        setAlbum: React.Dispatch<React.SetStateAction<string>>,
        setPost: React.Dispatch<React.SetStateAction<string>>,
        setTodo: React.Dispatch<React.SetStateAction<string>>,
        setPhoto: React.Dispatch<React.SetStateAction<string>>
    ) => void;
}

interface OwnProps {}

// interface OwnState {} // for class components

type Props = StateProps & OwnProps & DispatchProps;
// class ReduxOld extends React.Component<Props, OwnState> {
const ReduxOld: React.FC<Props> = (props) => {
    const { counterValue, incrementAction, decrementAction, isLoading, usersThunk, subsiquentDataThunk } = props;

    const [users, setUsers] = useState([]);
    const [album, setAlbum] = useState("");
    const [post, setPost] = useState("");
    const [toDo, setTodo] = useState("");
    const [photo, setPhoto] = useState("");

    const handleAdd = () => incrementAction({ incrementValue: addValue });

    const handleRemove = () => decrementAction({ decrementValue: subtractValue });

    const fetchUsers = () => usersThunk(setUsers);

    const clearUsers = () => setUsers([]);

    const fetchSubsiquentData = () => subsiquentDataThunk(setAlbum, setPost, setTodo, setPhoto);

    const clearSubsiquentData = () => {
        setAlbum("");
        setPost("");
        setTodo("");
        setPhoto("");
    };

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
                <h2>consiquent async redux-thunk</h2>
                <button onClick={fetchSubsiquentData}>Fetch data</button>
                <button onClick={clearSubsiquentData}>Clear data</button>
                <div className={styles.box3item}>
                    <div className={styles.box3_title}>album:</div>
                    <div className={styles.box3_subtitle}>{album}</div>
                </div>
                <div className={styles.box3item}>
                    <div className={styles.box3_title}>post:</div>
                    <div className={styles.box3_subtitle}>{post}</div>
                </div>
                <div className={styles.box3item}>
                    <div className={styles.box3_title}>toDo:</div>
                    <div className={styles.box3_subtitle}>{toDo}</div>
                </div>
                <div className={styles.box3item}>
                    <div className={styles.box3_title}>photo:</div>
                    <div className={styles.box3_subtitle}>{photo && <img src={photo} alt="photo" />}</div>
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
    usersThunk: (payload) => dispatch(usersThunk(payload)),
    subsiquentDataThunk: (payload1, payload2, payload3, payload4) =>
        dispatch(subsiquentDataThunk(payload1, payload2, payload3, payload4)),
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(ReduxOld);
