import { useCallback } from 'react';
import { ChevronIcon } from 'components/Icons';

import PaginationRange from './PaginationRange';
import styles from './Pagination.module.css';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageClick }: PaginationProps) => {
  const onNextClick = useCallback(() => onPageClick(currentPage + 1), [currentPage]);
  const onPrevClick = useCallback(() => onPageClick(currentPage - 1), [currentPage]);

  const disableNext = currentPage >= totalPages;
  const disablePrev = currentPage <= 1;

  return (
    <ul className={styles.paginationList}>
      <li className={styles.paginationItem}>
        <button className={styles.button} disabled={disablePrev ? true : false} onClick={onPrevClick}>
          <ChevronIcon className={`${styles.arrow} ${styles.arrowLeft}`} />
        </button>
      </li>
      <PaginationRange currentPage={currentPage} totalPages={totalPages} onPageClick={onPageClick} />
      <li className={styles.paginationItem}>
        <button className={styles.button} disabled={disableNext ? true : false} onClick={onNextClick}>
          <ChevronIcon className={styles.arrow} />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
