import { useCallback } from "react";

import type { ButtonPager } from "./Pager";
import { classNames } from "@lib/utils/classNames";

export function ButtonPreviousPage(props: Omit<ButtonPager, "nbPages">) {
  const { position, onChange } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      if (position > 1) {
        onChange(position - 1);
      }
    },
    [onChange, position],
  );
  const disabled = position === 1;

  return (
    <li>
      <a
        className={classNames(
          "fr-pagination__link",
          "fr-pagination__link--prev",
          "fr-pagination__link--lg-label",
        )}
        title="Page précédente"
        role="link"
        onClick={handleClick}
        href={disabled ? undefined : "#"}
        aria-disabled={disabled}
      >
        Page précédente
      </a>
    </li>
  );
}
