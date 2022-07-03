import React from "react";

import Contact from "./Contact";

const Contacts = ({ contacts,removeContact }) => {
    return (
        contacts && contacts.map((contact) => (
            <div key={contact.id}>
            <Contact {...contact} removeContact={removeContact}/>
            </div>
        ))
    );
};
 
export default Contacts;
