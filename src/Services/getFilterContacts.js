
import { collection, query, getDocs, where } from "firebase/firestore";
import { fireDB, fireStore } from "../Config/firebaseInit";


const getFilterContacts = async({tag}) => {
    const fromFB = [];
    const q = query(collection(fireStore, "contacts"),where("firstName", "==", tag));
    
    const querySnapshot = getDocs(q)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            fromFB.push(doc.data())
        });
    });
};

export default getFilterContacts;
