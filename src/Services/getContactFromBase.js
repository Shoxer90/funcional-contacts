import { collection, getDocs, query } from "firebase/firestore";
import { fireStore } from "../Config/firebaseInit";

const getContactFromBase = () => {
    const fromFB = [];
    const q = query(collection(fireStore, "contacts"));

    const querySnapshot = getDocs(q)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            fromFB.push(doc.data())
        });
        // fillContacts(fromFB);
        return fromFB;
    });
};

export default getContactFromBase;