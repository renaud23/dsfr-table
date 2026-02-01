import {
  forwardRef,
  type ComponentProps,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { Tr } from "./Tr";

export type TbodyProps = {
  className?: string;
  id?: string;
};

type Nested = {
  children?:
    | ReactElement<ComponentProps<typeof Tr>>
    | Array<ReactElement<ComponentProps<typeof Tr>>>;
};

export const Tbody = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TbodyProps & Nested>
>(function Theader(props: PropsWithChildren<TbodyProps & Nested>, ref) {
  const { children, className, id } = props;
  return (
    <tbody ref={ref} className={className} id={id}>
      {children}
    </tbody>
  );
});
