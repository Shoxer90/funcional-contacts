import React, { useState } from "react";

import Header from "./Header";
import Search from "./Search";

const Component = () => {
    const [openNewContact, setStatusNewContact] = useState(false);

    const openComponent = () => {
        setStatusNewContact(!openNewContact)
    };

    const filterContacts = (tag) => {
        console.log("filter")
    };

    return (
        <div>
            <Header openComponent={openComponent}/>
            <Search filterContacts={filterContacts}/>
        </div>
    );
};

export default Component;
