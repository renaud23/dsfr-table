import { forwardRef, type ElementType, type PropsWithChildren } from "react";

export type TdProps = {
  className?: string;
  id?: string;
};

export const Td = forwardRef<HTMLTableCellElement, PropsWithChildren<TdProps>>(
  function Td(props: PropsWithChildren<TdProps>, ref) {
    const { children, className, id } = props;
    return (
      <td ref={ref} className={className} id={id}>
        {children}
      </td>
    );
  },
);

// type TotoProps<T> = {

// }

// function withIt<H,P> (){

//   return forwardRef<H extends ElementType, PropsWithChildren<P>>(
//   function Td(props: PropsWithChildren<TdProps>, ref) {
//     const { children, className, id } = props;
//     return (
//       <td ref={ref} className={className} id={id}>
//         {children}
//       </td>
//     );
//   },
// }
