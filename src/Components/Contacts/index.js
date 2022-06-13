import React, { memo } from "react";
import ContactItem from "./ContactItem";

const Contacts = ({contacts}) => {
    return (
        contacts.map((contact) => (
            <div key={contact.id}>
                <ContactItem {...contact}/>
            </div>
        ))
    );
};

export default memo(Contacts);
