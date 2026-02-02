import { useCallback, useRef, useState } from "react";
import { Body } from "./Body";
import { usePager } from "./pager/usePager";
import { DsfrTableContainer } from "./slot/DsfrTableContainer";
import { Table } from "./slot/Table";

import type { ColumnType } from "./table";
import { Header } from "@lib/table/Header";

import "./index.css";

export type DataTableProps<U> = {
  value: Array<U>;
  columns: Array<ColumnType>;
  nbRowsPerPage?: number;
};

function getAsArray<U>(e: U | U[]) {
  return Array.isArray(e) ? e : [e];
}

export function DataTable<
  U extends Record<string, unknown> = Record<string, unknown>,
>(props: DataTableProps<U>) {
  const { columns, value, nbRowsPerPage = 5 } = props;
  const containerEl = useRef<HTMLDivElement>(null);

  const [activeCell, setActiveCell] = useState<
    [number | undefined, number | undefined]
  >([undefined, undefined]);
  const [i, j] = activeCell;

  function onChangePage() {
    setActiveCell([undefined, undefined]);
  }

  const {
    component: Pager,
    currentPage,
    goNextPage,
    goPReviousPage,
  } = usePager(nbRowsPerPage, value.length, onChangePage);
  const startRow = (currentPage - 1) * nbRowsPerPage;
  const page = value.slice(startRow, startRow + nbRowsPerPage);

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const { key } = e;

    if (key === "ArrowDown") {
      e.preventDefault();
      setActiveCell([Math.min(1 + (i ?? -1), page.length - 1), j ?? 0]);
    } else if (key === "ArrowUp") {
      e.preventDefault();
      setActiveCell([Math.max((i ?? 1) - 1, 0), j ?? 0]);
    } else if (key === "ArrowRight") {
      e.preventDefault();
      setActiveCell([i ?? 0, Math.min((j ?? -1) + 1, columns.length - 1)]);
    } else if (key === "ArrowLeft") {
      e.preventDefault();
      setActiveCell([i ?? 0, Math.max((j ?? 1) - 1, 0)]);
    } else if (key === "PageUp") {
      e.preventDefault();
      setActiveCell([undefined, undefined]);
      containerEl.current?.focus();
      goNextPage?.();
    } else if (key === "PageDown") {
      e.preventDefault();
      setActiveCell([undefined, undefined]);
      containerEl.current?.focus();
      goPReviousPage?.();
    }
  }

  function onClickCell(ci: number, cj: number) {
    setActiveCell([ci, cj]);
  }

  return (
    <DsfrTableContainer tabIndex={0} onKeyDown={onKeyDown} ref={containerEl}>
      <Table className="data-table--table">
        <Header columns={columns} />
        <Body
          columns={columns}
          value={page}
          activeCell={activeCell}
          onClickCell={onClickCell}
        />
      </Table>
      <Pager />
    </DsfrTableContainer>
  );
}
