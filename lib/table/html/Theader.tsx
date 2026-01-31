import {
  forwardRef,
  type ComponentProps,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { Tr } from "./Tr";

export type TheaderProps = {
  className?: string;
  id?: string;
};

type Nested = {
  children?: ReactElement<ComponentProps<typeof Tr>>;
};

export const Theader = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TheaderProps & Nested>
>(function Theader(props: PropsWithChildren<TheaderProps & Nested>, ref) {
  const { children, className, id } = props;
  return (
    <thead ref={ref} className={className} id={id}>
      {children}
    </thead>
  );
});
