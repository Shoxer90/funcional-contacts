import { doc, deleteDoc } from "firebase/firestore";
import { fireStore } from "../Config/firebaseInit";

const removeDocument = async(id) => {
    await deleteDoc(doc(fireStore, "contacts", id));

};

export default removeDocument;