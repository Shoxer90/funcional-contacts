// import { memo } from "react";

// import { collection, query, getDocs } from "firebase/firestore";
// import { fireStore } from "../Config/firebaseInit";

// const getContacts = async() => {
//     const fromFB = []
   
//     const q = query(collection(fireStore , "contacts"));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         fromFB.push(doc.data());
//     });
//     return fromFB;
// };

// export default memo(getContacts);
// // 