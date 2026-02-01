import { forwardRef, type PropsWithChildren } from "react";

export type ThProps = {
  className?: string;
  id?: string;
};

export const Th = forwardRef<HTMLTableCellElement, PropsWithChildren<ThProps>>(
  function Td(props: PropsWithChildren<ThProps>, ref) {
    const { children, className, id } = props;
    return (
      <th ref={ref} className={className} id={id}>
        {children}
      </th>
    );
  },
);
