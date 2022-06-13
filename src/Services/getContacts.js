import { collection, query, getDocs } from "firebase/firestore";
import { fireStore } from "../Config/firebaseInit";

const getContacts = async() => {
    const q = query(collection(fireStore, "contacts"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
     console.log(doc.id, " => ", doc.data());

    });
};

export default getContacts;
