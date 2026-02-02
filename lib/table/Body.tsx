import {
  useEffect,
  useRef,
  type ComponentProps,
  type PropsWithChildren,
} from "react";
import { Tbody } from "./slot/Tbody";
import { Td } from "./slot/Td";
import { Tr } from "./slot/Tr";
import type { ColumnType } from "./table";

type BodyProps<U> = {
  value: Array<U>;
  columns: Array<ColumnType>;
  activeCell: [number | undefined, number | undefined];
  onClickCell: (i: number, j: number) => void;
};

type CellProps = ComponentProps<typeof Td> & {
  i: number;
  j: number;
  isActive: boolean;
  onClickCell: (i: number, j: number) => void;
};

function Cell(props: PropsWithChildren<CellProps>) {
  const { children, i, j, onClickCell, isActive, ...rest } = props;

  const tdEl = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    if (isActive) {
      tdEl.current?.focus();
    } else {
      tdEl.current?.blur();
    }
  }, [isActive]);

  function handleClick() {
    onClickCell(i, j);
  }

  return (
    <Td className="data-table--td" ref={tdEl} onClick={handleClick} {...rest}>
      {children}
    </Td>
  );
}

/**
 *
 * @param props
 * @returns
 */
export function Body<U extends Record<string, unknown>>(props: BodyProps<U>) {
  const { columns, value, activeCell, onClickCell } = props;
  const [ci, cj] = activeCell;

  const rows = value.map((row, i) => (
    <Tr key={i} className="data-table--tr">
      {columns.map((column, j) => {
        const isActive = j === cj && i === ci;
        console.log({ i, j, isActive });
        return (
          <Cell
            key={`${i}-${j}`}
            i={i}
            j={j}
            tabIndex={isActive ? 0 : -1}
            isActive={isActive}
            onClickCell={onClickCell}
          >
            {row && typeof row === "object" && column.property in row
              ? `${row[column.property]}`
              : null}
          </Cell>
        );
      })}
    </Tr>
  ));
  return <Tbody>{rows}</Tbody>;
}
