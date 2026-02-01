import {
  forwardRef,
  type ComponentProps,
  type ComponentType,
  type ElementType,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { Theader } from "./Theader";
import type { Tbody } from "./Tbody";

type TableProps = {
  className?: string;
};

type Nested = {
  children?: [
    (
      | ReactElement<ComponentProps<typeof Theader>>
      | ((props: unknown) => ReactElement<ComponentProps<typeof Theader>>)
    ),
    (
      | ReactElement<ComponentProps<typeof Tbody>>
      | ((props: unknown) => ReactElement<ComponentProps<typeof Tbody>>)
    ),
  ];
};

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
