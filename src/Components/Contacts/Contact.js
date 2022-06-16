import React, { useState } from "react";
import Button from "../Buttons";
import Avatar from "./Avatar";

import styles from "./index.module.scss"

const Contact = ({...contact}) => {
    const [showMore,setShowMore] = useState(false);

    const handleOpenInfo = () => {
        setShowMore(!showMore)
    }

    return (
        <div key={contact?.id} className={styles.contactItem}>
            <Avatar className={styles.avatar} src={contact?.avatar} alt={contact?.lastName} />
            <div>
            <span>{contact?.firstName} {contact?.lastName}
            {showMore && 
                <span>{contact?.phone} {contact?.email}</span>
            }
            </span>
            </div>  
            <Button 
                name={"see more"} 
                func={handleOpenInfo}
            />
        </div>
    );
};

export default Contact;
