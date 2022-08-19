import PAGE_LIMIT from "./modules";

const drowPagination = async(collectionLength) => {
    const listOfPages = [];

    for(let i = 0; i < collectionLength / PAGE_LIMIT; i ++ ) {
        listOfPages.push( i+ 1)
    };
    if (listOfPages.length > 1) {
        listOfPages.push(">");
        listOfPages.unshift("<");
    };
     return listOfPages;
};

export default drowPagination;
