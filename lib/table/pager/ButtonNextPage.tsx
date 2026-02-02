import { useCallback } from "react";

import type { ButtonPager } from "./Pager";
import { classNames } from "@lib/utils/classNames";

export function ButtonNextPage(props: ButtonPager) {
  const { nbPages, position, onChange } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      if (position < nbPages) {
        onChange(position + 1);
      }
    },
    [nbPages, onChange, position],
  );

  const disabled = position === nbPages;

  return (
    <li>
      <a
        className={classNames(
          "fr-pagination__link",
          "fr-pagination__link--next",
          "fr-pagination__link--lg-label",
        )}
        title="Page suivante"
        onClick={handleClick}
        href={disabled ? undefined : "#"}
        aria-disabled={disabled}
        role="link"
      >
        Page suivante
      </a>
    </li>
  );
}
