import { doc, setDoc } from "firebase/firestore";
import { fireStore } from "../Config/firebaseInit";

import { v4 as uuidv4 } from 'uuid';

const setContacts = async(form) => {
    await setDoc(doc(fireStore, "contacts", form.email), {
        id: uuidv4(),
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
        avatar: form.avatar,
    });
};

export default setContacts;
