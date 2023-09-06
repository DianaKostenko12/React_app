import React from 'react';
import {getPagesArrray} from "../../../utils/page";

interface PaginationProps {
    totalPages:number;
    page:number;
    changePage(page:number) : void;
}

const Pagination = ({totalPages, page, changePage}: PaginationProps) => {
    let pagesArray = getPagesArrray({totalPages})
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}>
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;