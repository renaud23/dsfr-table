import { useEffect, useRef, type ReactElement, isValidElement } from "react";
import { Table } from "./html/Table";
import type { ColumnProps } from "./Column";
import { Theader } from "./html/Theader";
import { Tr } from "./html/Tr";

export type DataTableProps = {
  children?: ReactElement<ColumnProps> | ReactElement<ColumnProps>[];
};

export function DataTable(props: DataTableProps) {
  const { children } = props;

  const init = useRef(false);

  useEffect(() => {
    if (!init.current) {
      init.current = true;
      let c = Array.isArray(children) ? children : [children];

      c.map((child) => {
        if (isValidElement<ColumnProps>(child)) {
        }
      });
    }
  }, []);

  return (
    <Table>
      <Theader></Theader>
    </Table>
  );
}
