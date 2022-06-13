import React from "react";

import styles from "./index.module.scss";

const Button = ({name,func,h,w}) => {

    const handleClick = () => {
        return func();
    };
    
    return (
        <button className={styles.button} style={{height:h,width:w}}  onClick={()=>handleClick()}>
            {name}
        </button>
    );
};

export default Button;
