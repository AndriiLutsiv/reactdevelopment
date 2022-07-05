import React from "react";
import styles from "./redux-old.module.css";

interface Props {}

const ReduxOld: React.FC<Props> = (props) => {
    return (
        <div className={styles.reduxOldRoot}>
            <button>Add</button>
            <div>Counter</div>
            <button>Remove</button>
        </div>
    );
};

export default ReduxOld;
