import React, { useState } from "react";

import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

import { fireStorage } from "../../Config/firebaseInit";
import setContacts from "../../Modules/setContacts";

import styles from "./index.module.scss";
import Inputs from "./Inputs";

const Form = ({ openComponent, getContactFromBase }) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        avatar: "",
    });
   
    const inputs = ["firstName", "lastName", "phone", "email"];

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const dontSetNewContact = (e) => {
        e.preventDefault();
        openComponent();
    };

    const sendPicToStorage = (e) => {
        const picNameId = uuidv4();
        const imageRef = ref(fireStorage, `contactAvatars/${picNameId}`);
            uploadBytes(imageRef, e.target[4].files[0]).then(() => {
            const imageListRef = ref(fireStorage, `contactAvatars/`);
            listAll(imageListRef).then((response) => {
                response.items.forEach((item) => {
                    if (item.name === picNameId) {
                        getDownloadURL(item).then((uploadPicUrl) => {
                        setState({
                                ...state,
                                id:uuidv4(),
                                avatar: uploadPicUrl,
                            });
                        });
                    };
                });
            })
        });
    };

    const handleSetContact = (e) => {
        e.preventDefault();
        if(e.target[4].files[0]) sendPicToStorage(e);
        setContacts(state);
        getContactFromBase();
        openComponent();
    };

    return (
        <form onSubmit={handleSetContact} className={styles.newContact}>
            {inputs.map((input) =>(
                <div key={input}>
                    <Inputs 
                        name={input}
                        style={styles.label}
                        handleInputChange={handleInputChange}
                        value={state.input}
                    />
                </div>
            ))
            }
          
            <label>
                "Get photo"
                <input type="file" name="avatar" />
            </label>
            <button type="submit">add contact</button>
            <button onClick={(e) => dontSetNewContact(e)}>go back</button>
        </form>
    );
};

export default Form;
