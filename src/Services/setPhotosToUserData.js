
import { fireStore} from "../Config/firebaseInit";

import { doc, setDoc } from "firebase/firestore"; 

const setPhotosToUserData = async(arrOfImages,id) => {
    console.log("IM IN FUNC")
    const cityRef = doc(fireStore, 'contacts', id);
    await setDoc(cityRef, { imageArr: arrOfImages }, { merge: true });
};

export default setPhotosToUserData;