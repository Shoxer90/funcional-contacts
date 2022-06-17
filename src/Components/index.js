import React, { memo, useEffect, useState } from "react";

import { collection, getDocs, query } from "firebase/firestore";
import { fireStore } from "../Config/firebaseInit";

import getContacts from "../Services/getContacts";

import Header from "./Header";
import Search from "./Search";
import Contacts from "./Contacts";
import NewContact from "./NewContact";
import Pagination from "./Pagination.js";

const Component = () => {
    const [openNewContact, setStatusNewContact] = useState(false);
    const [contacts, fillContacts] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [contactPerPage] = useState(5);

    
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
    
    const lastContactIndex = currentPage * contactPerPage;
    const firstContactIndex = lastContactIndex - contactPerPage;
    const contactsInPage = contacts.slice(firstContactIndex, lastContactIndex);

    const paginate = page => {
        setCurrentPage(page)
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
                <Contacts contacts={contactsInPage}/>
            }
            <Pagination
                contactPerPage={contactPerPage}
                contactsQuantity={contacts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default memo(Component);
