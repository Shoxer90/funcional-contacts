import React from "react";

import Button from "../Buttons";

import styles from "./index.module.scss";

const Header = ({openComponent}) => {
    return (
        <div className={styles.header}>
            <h1>Contact list</h1>
            <Button 
                name={"Add new contact"} 
                func={openComponent}
            />
        </div>
    );
};

export default Header;
