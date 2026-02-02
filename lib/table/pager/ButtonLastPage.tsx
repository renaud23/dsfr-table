import { useCallback } from 'react'

import type { ButtonPager } from './Pager'

export function ButtonLastPage(props: ButtonPager) {
  const { nbPages, position, onChange } = props

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      if (position !== nbPages) {
        onChange(nbPages)
      }
    },
    [nbPages, onChange, position],
  )
  const disabled = position === nbPages

  return (
    <li>
      <a
        className="fr-pagination__link fr-pagination__link--last"
        href={disabled ? undefined : '#'}
        aria-disabled={disabled}
        title="Dernière page"
        onClick={handleClick}
      >
        Dernière page
      </a>
    </li>
  )
}
