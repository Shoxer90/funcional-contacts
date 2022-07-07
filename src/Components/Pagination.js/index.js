import React, { memo } from "react";

import styles from "./index.module.scss";

const Pagination = ({ contactPerPage, contactsQuantity, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(contactsQuantity/contactPerPage); i ++) {
        pageNumbers.push(i);
    };

    return (
        <div>
            <ul className={styles.pagination}>
                {pageNumbers.map((eachPage) => (
                    <li key={eachPage} onClick={()=>paginate(eachPage)}>
                        <a href="!#">
                          {eachPage}
                        </a> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(Pagination);   
