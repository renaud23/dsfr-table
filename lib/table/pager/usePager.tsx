import { useCallback, useState } from "react";

import { type OnChangePageEvent, Pager } from "./Pager";

function checkNbPages(nbRows: number, nbRowsPerPage: number) {
  return Math.trunc(nbRows / nbRowsPerPage) + (nbRows % nbRowsPerPage ? 1 : 0);
}

export function Nothing() {
  return null;
}

export function usePager(
  nbRowsPerPage: number,
  nbRows: number,
  onChange?: OnChangePageEvent,
) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nbPages = checkNbPages(nbRows, nbRowsPerPage);

  const handleChange = useCallback(
    (pageIndex: number) => {
      setCurrentPage(pageIndex);
      onChange?.(pageIndex);
    },
    [onChange],
  );

  const goNextPage = useCallback(() => {
    const n = Math.min(currentPage + 1, nbPages);
    setCurrentPage(n);
    onChange?.(n);
  }, [currentPage, nbPages, onChange]);

  const goPReviousPage = useCallback(() => {
    const n = Math.max(currentPage - 1, 1);
    setCurrentPage(n);
    onChange?.(n);
  }, [currentPage, onChange]);

  const goToPage = useCallback(
    (index: number) => {
      if (index >= 1 && index <= nbPages) {
        setCurrentPage(index);
      }
    },
    [nbPages],
  );
  if (nbRowsPerPage >= nbRows) {
    return { component: Nothing, currentPage: 1 };
  }
  return {
    currentPage,
    goNextPage,
    goPReviousPage,
    goToPage,
    component: () => (
      <Pager nbPages={nbPages} position={currentPage} onChange={handleChange} />
    ),
  };
}
