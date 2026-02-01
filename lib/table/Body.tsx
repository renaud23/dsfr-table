import { Tbody } from "./slot/Tbody";
import { Td } from "./slot/Td";
import { Tr } from "./slot/Tr";
import type { ColumnType } from "./table";

type BodyProps<U> = {
  value: Array<U>;
  columns: Array<ColumnType>;
};

export function Body<U extends Record<string, unknown>>(props: BodyProps<U>) {
  const { columns, value } = props;
  const rows = value.map((row, i) => (
    <Tr key={i}>
      {columns.map((col, j) => (
        <Td key={j}>
          {row && typeof row === "object" && col.property in row
            ? `${row[col.property]}`
            : null}
        </Td>
      ))}
    </Tr>
  ));
  return <Tbody>{rows}</Tbody>;
}
