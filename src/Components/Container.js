import React, { useEffect, useState } from "react";

import { collection, endBefore, getDocs, limit, orderBy, query ,startAfter, startAt } from "firebase/firestore";

import { fireStore } from "../Config/firebaseInit";

import Header from "./Header";
import Search from "./Search";
import Contacts from "./Contacts";
import NewContact from "./NewContact";
import Pagination from "./Pagination";

import drowPagination from "../Modules/pagination";
import onPageButtonClick from "../Modules/onPageButtonClick";
import getContactFromBase from "../Modules/getAllContacts";
import PAGE_LIMIT from "../Modules/modules";
import deleteStorageIMGS from "../Modules/deleteStorageIMGS";
import removeDocument from "../Modules/removeDocument";

const Container = () => {
    const [openNewContact, setStatusNewContact] = useState(false);
    const [pageContacts,setPageContacts] = useState([]);
    const [pageDoc, setPageDoc] = useState([]);
    const [pagination, setPagination] = useState([]);
   
    const openComponent = () => setStatusNewContact(!openNewContact);

    const removeContact = id => {
        deleteStorageIMGS("coll", id);
        deleteStorageIMGS("avatar", id);
        removeDocument(id);
    };

    const getSnapshotsForPagination = async (data) => {
        const documentSnapshots = await getDocs(data);

        const handleData = documentSnapshots.docs.map((doc) => doc.data());

        if (handleData.length === 0) {
            return;
        }
        setPageContacts(handleData);
        setPageDoc(documentSnapshots);
    };

    const fetch = async () => {
        const page = query(collection(fireStore, "contacts"), 
        orderBy("firstName"), 
        limit(PAGE_LIMIT));
        getSnapshotsForPagination(page);

        const allContacts = await getContactFromBase();
        
        const paginate = await drowPagination(allContacts.length);
        setPagination(paginate);
    };

    const buttonPagination = (arg) => {
        if (arg === ">") {
            fetchAfter();
        }else if (arg === "<") {
            fetchPrevious();
        }else{
           onPageButtonClick(arg)
           .then((page) => {
               getSnapshotsForPagination(page);
           });
        };
    };

    const fetchAfter = async () => {
        const lastVisible = pageDoc.docs[pageDoc.docs.length - 1];

        const page = query(collection(fireStore, "contacts"),
        orderBy("firstName"),
        startAfter(lastVisible),
        limit(PAGE_LIMIT));

        getSnapshotsForPagination(page);
    };
    
    const fetchPrevious = async () => {
        const prevPageEnd = pageDoc.docs[0];

        const previousAllData = query(collection(fireStore, "contacts"),
        orderBy("firstName"),
        endBefore(prevPageEnd));

        const previousAllDataDocs = await getDocs(previousAllData);

        const prevPageStart = previousAllDataDocs.docs[previousAllDataDocs.docs.length - PAGE_LIMIT];

        const page = query(collection(fireStore, "contacts"),
        orderBy("firstName"),
        startAt(prevPageStart),
        endBefore(prevPageEnd),
        limit(PAGE_LIMIT));
        getSnapshotsForPagination(page);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div>
            <Header openComponent={openComponent} />
            <Search getSnapshotsForPagination={getSnapshotsForPagination} />
            { openNewContact &&
                <NewContact openComponent={openComponent} />
            }
            { !openNewContact && pageContacts &&
                <Contacts pageContacts={pageContacts} removeContact={removeContact} />
            }
           {pagination.map((page) => (
                <Pagination
                    page={page} 
                    key={Math.random()} 
                    buttonPagination={buttonPagination} 
                />
            ))}
        </div>
    );
};

export default Container;
