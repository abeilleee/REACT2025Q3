import { useMemo } from 'react';
import { LIMIT } from '@/services/api/constants';
import { DOTS, ONE, TWO } from '@/utils/constants';

/**
 * the number of pages are displayed before and after the selected page
 * @type {number}
 */
const SIBLING_COUNT = 2;
/**
 * the fixed number of pages when dots are on one side
 * @type {number}
 */
const FIXED_DISPLAYED_PAGE_COUNT = 2;
const MIN_DISPLAYED_PAGE_COUNT = 5;

type usePaginationProps = {
  currentPage: number;
  total: number;
};

export const usePagination = (props: usePaginationProps) => {
  const { currentPage, total } = props;

  const pagesArr = useMemo(() => {
    const totalPageCount = Math.ceil(total / LIMIT);
    const totalPageNumbers = SIBLING_COUNT + MIN_DISPLAYED_PAGE_COUNT;

    const getRangeArr = (start: number, end: number) => {
      const length = end - start + ONE;

      return Array.from({ length }, (_, idx) => start + idx);
    };

    if (totalPageNumbers >= totalPageCount) {
      return getRangeArr(ONE, totalPageCount);
    }

    const leftSiblingIdx = Math.max(currentPage - SIBLING_COUNT, ONE);
    const rightSiblingIdx = Math.min(
      currentPage + SIBLING_COUNT,
      totalPageCount
    );

    const isLeftDotsDisplayed = leftSiblingIdx > TWO;
    const isRightDotsDisplayed = rightSiblingIdx < totalPageCount - TWO;

    const firstPageIdx = ONE;
    const lastPageIdx = totalPageCount;

    if (!isLeftDotsDisplayed && isRightDotsDisplayed) {
      const leftItemCount = FIXED_DISPLAYED_PAGE_COUNT + TWO * SIBLING_COUNT;
      const leftRange = getRangeArr(ONE, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (isLeftDotsDisplayed && !isRightDotsDisplayed) {
      const rightItemCount = FIXED_DISPLAYED_PAGE_COUNT + TWO * SIBLING_COUNT;
      const rightRange = getRangeArr(
        totalPageCount - rightItemCount + ONE,
        totalPageCount
      );

      return [firstPageIdx, DOTS, ...rightRange];
    }

    if (isLeftDotsDisplayed && isRightDotsDisplayed) {
      const middle = getRangeArr(leftSiblingIdx, rightSiblingIdx);

      return [firstPageIdx, DOTS, ...middle, DOTS, lastPageIdx];
    }
  }, [currentPage, total]);

  return pagesArr;
};
