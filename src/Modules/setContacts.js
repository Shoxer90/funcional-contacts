import { doc, setDoc } from "firebase/firestore";

import { fireStore } from "../Config/firebaseInit";

const setContacts = form => setDoc(doc(fireStore, "contacts", form.id), form);

export default setContacts;
