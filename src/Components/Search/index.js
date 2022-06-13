import React from "react";

import styles from "./index.module.scss";

const Search = ({filterContacts}) => {

    const handleSearch = (e) => {
        e.preventDefault();
        filterContacts();
    };

    return (
        <div className={styles.search}>
            <form onClick={(e)=>handleSearch}>
                <input className={styles.input} type="text" placeholder="Get contact from your contact list..." />
                <button type="submit" >Search</button>
            </form>
        </div>
    );
};

export default Search;
