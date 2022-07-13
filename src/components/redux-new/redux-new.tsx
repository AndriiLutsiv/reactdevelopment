import React, { useState } from "react";
//@ts-ignore
import styles from "./redux-new.module.css";

interface Props {}

const ReduxNew: React.FC<Props> = (props) => {
    return (
        <div className={styles.reduxNewRoot}>
            <h1>New redux</h1>
            <button>Add</button>
            <div>Counter</div>
            <button>Remove</button>
        </div>
    );
};

export default ReduxNew;
