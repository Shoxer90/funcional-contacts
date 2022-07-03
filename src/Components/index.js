import React, { memo, useEffect, useState, useContext } from "react";

import { collection, deleteDoc, doc, getDocs, query ,where} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

import { fireStore, fireStorage } from "../Config/firebaseInit";

import ShowContacts from "./Context/Context";
import Header from "./Header";
import Search from "./Search";
import Contacts from "./Contacts";
import NewContact from "./NewContact";
import Pagination from "./Pagination.js";

const Component = () => {
    const { contacts, fillContacts } = useContext(ShowContacts);
    const [openNewContact, setStatusNewContact] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [contactPerPage] = useState(5);

    useEffect(() => {
       getContactFromBase()
    },[]);
    console.log(contacts)
    
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

    const getFilterContacts = tag => {
        const fromFB = [];
        const contactRef = collection (fireStore,"contacts");
        const q = query (contactRef,
            where ("firstName", "==", tag )
            // where("firstName", ">=", tag) ||
            // where("firstName", "<=", tag + "\uf8ff")
        );
        const querySnapshot = getDocs(q)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                fromFB.push(doc.data())
            });
            fillContacts(fromFB);
        });
    };

    const removeContact = async(id) => {
        // const desertRef = ref(fireStorage, `${id}/042684f3-218e-4975-89dc-24c55e826563`);
        // await deleteObject(desertRef)
        // .then(() => {
        //   console.log("// File deleted successfully")
        // }).catch((error) => {
        //   console.log("// Uh-oh, an error occurred!")
        // });
        
        // deleteDoc(doc(fireStore, "contacts", id))
    };

    
     
    return (
        <div>
            <Header openComponent={openComponent}/>
            <Search getFilterContacts={getFilterContacts}/>
            {openNewContact &&
                <NewContact
                    openComponent={openComponent}
                    getContactFromBase={getContactFromBase}
                />
            }
            {!openNewContact && 
                <Contacts contacts={contactsInPage} removeContact={removeContact}/>
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
