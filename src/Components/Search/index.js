import { collection, query, where } from "firebase/firestore";
import React, { memo, useState } from "react";
import { fireStore } from "../../Config/firebaseInit";

import styles from "./index.module.scss";

const Search = ({ getSnapshotsForPagination }) => {
    const [inputs, setInputs] = useState("");

    const getFilterContacts = async (tag) => {
        const searchData = query(collection(fireStore, "contacts"), 
        where("firstName", ">=", tag),
        where("firstName", "<=", tag + "\uF7FFB"));
        
        getSnapshotsForPagination(searchData);
    };

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
