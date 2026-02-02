import { classNames } from "@lib/utils/classNames";
import { forwardRef, type PropsWithChildren } from "react";

type DsfrTableContainerProps = {
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};

export const DsfrTableContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<DsfrTableContainerProps>
>(function DsfrTableContainer(
  props: PropsWithChildren<DsfrTableContainerProps>,
  ref,
) {
  const { children, tabIndex, onKeyDown } = props;
  return (
    <div
      ref={ref}
      className={classNames("fr-table", "data-table")}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
    >
      <div className="fr-table__wrapper" tabIndex={-1}>
        <div className="fr-table__container">
          <div className="fr-table__content">{children}</div>
        </div>
      </div>
    </div>
  );
});
