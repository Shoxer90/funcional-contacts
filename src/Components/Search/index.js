import React, { useState } from "react";

import styles from "./index.module.scss";

const Search = ({filterContacts}) => {
    const [inputs, setInputs] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        filterContacts(inputs);
    };

    return (
        <div className={styles.search}>
            <form onSubmit={(e)=>handleSearch(e)}>
                <input 
                    className={styles.input}
                    type="text" 
                    placeholder="Get contact from your contact list..."
                    onChange={(e)=>setInputs(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;
