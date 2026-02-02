import { useCallback } from 'react'

import type { ButtonPager } from './Pager'

export function ButtonFirstPage(props: Omit<ButtonPager, 'nbPages'>) {
  const { position, onChange } = props

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      if (position !== 1) {
        onChange(1)
      }
    },
    [onChange, position],
  )

  const disabled = position === 1

  return (
    <li>
      <a
        className="fr-pagination__link fr-pagination__link--first"
        title="Première page"
        href={disabled ? undefined : '#'}
        aria-disabled={disabled}
        role="link"
        onClick={handleClick}
      >
        Première page
      </a>
    </li>
  )
}
