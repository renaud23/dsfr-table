import {
  forwardRef,
  type ComponentProps,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { Theader } from "./Theader";

type TableProps = {
  className?: string;
};

type Nested = { children?: ReactElement<ComponentProps<typeof Theader>> };

export const Table = forwardRef<
  HTMLTableElement,
  PropsWithChildren<TableProps & Nested>
>(function Table(props: PropsWithChildren<TableProps & Nested>, ref) {
  const { children, className } = props;
  return (
    <table ref={ref} className={className}>
      {children}
    </table>
  );
});
