import React, { useEffect, useState } from "react";

import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

import { fireStorage } from "../../Config/firebaseInit";

import setContacts from "../../Services/setContacts";

import styles from "./index.module.scss";

const Form = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        avatar: "",
    });

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        setContacts(state)
        alert("Contact is ready")
    }, [state.avatar]);

    const handleSetContact = (e) => {
        e.preventDefault();
        const imageRef = ref(fireStorage, `contactAvatars/${e.target[4].files[0].name}`);
            uploadBytes( imageRef, e.target[4].files[0] ).then(() => {
            const imageListRef = ref(fireStorage, `contactAvatars/`);
            listAll(imageListRef).then((response) => {
                response.items.forEach((item) => {
                    if (item.name === e.target[4].files[0].name) {
                        getDownloadURL(item).then((uploadPicUrl) => {
                          setState({
                                ...state,
                                avatar: uploadPicUrl,
                            });
                        });
                    };
                });
            });
        });
    };


    return (
        <form onSubmit={handleSetContact} className={styles.newContact}>
            <label className={styles.label}>
                Name: 
                <input
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Surname: 
                <input 
                    type="text" 
                    name="lastName"
                    value={state.lastName}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Phone:
                <input 
                type="text"
                name="phone"
                value={state.phone} 
                onChange={handleInputChange}
            />
            </label>
            <label>
                E-mail:
                <input 
                    type="email" 
                    name="email" 
                    value={state.email}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Get photo 
                <input 
                    type="file" 
                    name="avatar" 
                />
            </label>
            <button type="submit">add contact</button>
            <button>go back</button>
        </form>
    );
};

export default Form;
