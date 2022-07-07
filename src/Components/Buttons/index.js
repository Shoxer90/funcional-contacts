import React from "react";

import styles from "./index.module.scss";

const Button = ({ name, func }) => (
    <button className={styles.button} onClick={func} >
        {name}
    </button>
);

export default Button;
