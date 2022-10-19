import usePagination from 'hooks/usePagination';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './PaginationRange.module.css';

type PaginationRangeProps = {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
};

const PaginationRange = ({ currentPage, totalPages, onPageClick }: PaginationRangeProps) => {
  const pagination = usePagination({ totalPageCount: totalPages, currentPage });

  const rangeItem = pagination?.map((paginationItem: number | string) => {
    const isDots = typeof paginationItem === 'string';
    const isNumber = typeof paginationItem === 'number';

    const style = paginationItem === currentPage ? parseMultipleClassNames([styles.paginationItem, styles.activeItem]) : styles.paginationItem;

    const handlePageClick = () => {
      if (isNumber) {
        onPageClick(paginationItem as number);
      }
    };
    if (isDots) {
      return <li className={styles.paginationPadding}>&#8230;</li>;
    }
    if (isNumber) {
      return (
        <li className={style}>
          <button className={styles.button} onClick={handlePageClick}>
            {paginationItem}
          </button>
        </li>
      );
    }
  });

  return <>{rangeItem}</>;
};

export default PaginationRange;
