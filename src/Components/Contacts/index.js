import React from "react";

import Contact from "./Contact";

const Contacts = ({ contacts }) => {
    return (
        contacts && contacts.map((contact) => (
            <div key={contact.id}>
                <Contact {...contact}/>
            </div>
        ))
    );
};
 
export default Contacts;
