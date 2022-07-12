import { collection, getDocs } from "firebase/firestore";

import { fireStore } from "../Config/firebaseInit";

const getContactFromBase = async() => {
    const collectionRef = collection(fireStore, "contacts");
    const data = await getDocs(collectionRef);
    
    const contactCollection = data.docs.map((cont) => cont.data());

    return contactCollection;

};

export default getContactFromBase;
