import React, { memo } from "react";

import Contact from "./Contact";

const Contacts = ({ contacts, removeContact }) => (
        contacts.map((contact) => (
            <div key={contact.id}>
             <Contact {...contact} removeContact={removeContact} />
            </div>
        ))
    );
 
export default memo(Contacts);
