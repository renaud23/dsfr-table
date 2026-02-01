import {
  forwardRef,
  type ComponentProps,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import type { Td } from "./Td";
import type { Th } from "./Th";

export type TrProps = {
  className?: string;
  id?: string;
};

type Nested = {
  children?:
    | ReactElement<ComponentProps<typeof Th>>
    | ReactElement<ComponentProps<typeof Td>>
    | Array<ReactElement<ComponentProps<typeof Td>>>
    | Array<ReactElement<ComponentProps<typeof Th>>>;
};

export const Tr = forwardRef<
  HTMLTableRowElement,
  PropsWithChildren<TrProps & Nested>
>(function Tr(props: PropsWithChildren<TrProps & Nested>, ref) {
  const { children, className, id } = props;
  return (
    <tr ref={ref} className={className} id={id}>
      {children}
    </tr>
  );
});
