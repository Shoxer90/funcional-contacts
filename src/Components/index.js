import React, { useEffect, useState } from "react";

import getContacts from "../Services/getContacts";
import Contacts from "./Contacts";

import Header from "./Header";
import NewContact from "./NewContact";
import Search from "./Search";

const Component = () => {
    const [openNewContact, setStatusNewContact] = useState(false);
    const [contacts, buildContacts] = useState();

    useEffect(() => {
       buildContacts();
    },[]);

    const openComponent = () => {
        setStatusNewContact(!openNewContact)
    };

    const filterContacts = (tag) => {
        console.log(tag)
        getContacts()
    };

    return (
        <div>
            <Header openComponent={openComponent}/>
            <Search filterContacts={filterContacts}/>
            {openNewContact && <NewContact/>}
            {contacts && <Contacts {...contacts}/>}
        </div>
    );
};

export default Component;
