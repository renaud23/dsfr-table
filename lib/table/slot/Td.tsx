import { forwardRef, type PropsWithChildren } from "react";

export type TdProps = {
  className?: string;
  id?: string;
  tabIndex?: number;
  onClick?: (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTableCellElement, Element>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTableCellElement, Element>) => void;
};

export const Td = forwardRef<HTMLTableCellElement, PropsWithChildren<TdProps>>(
  function Td(props: PropsWithChildren<TdProps>, ref) {
    const { children, className, id, tabIndex, onClick, onBlur, onFocus } =
      props;
    return (
      <td
        ref={ref}
        className={className}
        id={id}
        tabIndex={tabIndex}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
      >
        {children}
      </td>
    );
  },
);
