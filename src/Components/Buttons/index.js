import React from "react";

import styles from "./index.module.scss";

const Button = ({name, func}) => {
    const handleClick = () => func();
    
    return (
        <button className={styles.button} onClick={()=>handleClick()}>
            {name}
        </button>
    );
};

export default Button;
