import React, { memo, useEffect, useState } from "react";

import { collection, getDocs, query } from "firebase/firestore";
import { fireStore } from "../Config/firebaseInit";

import getContacts from "../Services/getContacts";

import Header from "./Header";
import Search from "./Search";
import Contacts from "./Contacts";
import NewContact from "./NewContact";

const Component = () => {
    const [openNewContact, setStatusNewContact] = useState(false);
    const [contacts, fillContacts] = useState("");

    useEffect(() => {
        getContactFromBase()
    },[]);

    const getContactFromBase = () => {
        const fromFB = [];
        const q = query(collection(fireStore, "contacts"));
    
        const querySnapshot = getDocs(q)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                fromFB.push(doc.data())
            });
            fillContacts(fromFB);
        });
    };

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
            {openNewContact &&
                <NewContact 
                    openComponent={openComponent}
                    etContactFromBase={getContactFromBase}
                />
            }
            {!openNewContact && 
                <Contacts contacts={contacts}/>
            }
        </div>
    );
};

export default memo(Component);
