import React from "react";
//@ts-ignore
import styles from "./redux-tutorial.module.css";
import { ReduxOld } from "../../components/redux-old";
import { ReduxNew } from "../../components/redux-new";

interface Props {}

const ReduxTutorial: React.FC<Props> = (props) => {
    return (
        <div className={styles.reduxTutorialRoot}>
            <ReduxOld />
            <ReduxNew />
        </div>
    );
};

export default ReduxTutorial;
