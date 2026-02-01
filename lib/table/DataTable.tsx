import { Body } from "./Body";
import { Table } from "./slot/Table";

import type { ColumnType } from "./table";
import { Header } from "@lib/table/Header";

export type DataTableProps<U> = {
  value: Array<U>;
  columns: Array<ColumnType>;
};

function getAsArray<U>(e: U | U[]) {
  return Array.isArray(e) ? e : [e];
}

export function DataTable<
  U extends Record<string, unknown> = Record<string, unknown>,
>(props: DataTableProps<U>) {
  const { columns, value } = props;

  return (
    <Table>
      <Header columns={columns} />
      <Body columns={columns} value={value} />
    </Table>
  );
}
