import { collection, getDocs, limit, orderBy, query, startAt } from "firebase/firestore";
import { fireStore } from "../Config/firebaseInit";
import PAGE_LIMIT from "./modules";

const onPageButtonClick = async (number) => {
    const allData = query(collection(fireStore, "contacts"), orderBy("firstName"));
    const sortedData = await getDocs(allData)

    const firstContactOfPage = sortedData.docs[PAGE_LIMIT * (number - 1)];

    const page = query(collection(fireStore, "contacts"),
    orderBy("firstName"),
    startAt(firstContactOfPage),
    limit(PAGE_LIMIT));
    return page;

    // getSnapshotsForPagination(page);
};

export default onPageButtonClick;