import { Th } from "@lib/table/slot/Th";
import { Theader } from "@lib/table/slot/Theader";
import { Tr } from "@lib/table/slot/Tr";
import type { ColumnType } from "@lib/table/table";

type HeaderProps = {
  columns: ColumnType[];
};

export function Header(props: HeaderProps) {
  const { columns } = props;
  const content = columns.map(({ property, header }, j) => {
    return <Th key={`${property}-${j}`}>{header ? header : property}</Th>;
  });

  return (
    <Theader>
      <Tr>{content}</Tr>
    </Theader>
  );
}
