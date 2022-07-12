import React, { memo } from "react";

import style from "./index.module.scss";

const Pagination = ({ page, buttonPagination }) => (
    <button 
        className={style.pageButton} 
        onClick={() => buttonPagination(page)}>
        {page}
    </button>
);

export default memo(Pagination);
