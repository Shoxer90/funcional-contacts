import React, { memo, useState } from "react";

import styles from "./index.module.scss";

const Search = ({ getFilterContacts }) => {
    const [inputs, setInputs] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        getFilterContacts(inputs);
    };
    
    return (
        <div className={styles.search}>
            <form onSubmit={handleSearch}>
                <input 
                    name="filter"
                    className={styles.input}
                    type="text" 
                    placeholder="Get contact from your contact list..."
                    onChange={(e) => setInputs(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default memo(Search);
