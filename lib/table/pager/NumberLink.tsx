 

import { classNames } from '@lib/utils/classNames'
import type { OnChangePageEvent } from './Pager'

type NumberLinkProps = {
  index: number
  position: number
  display?: boolean
  onChange: OnChangePageEvent
}

/**
 * Lien cliquable dans le page, pour un numéro de page spécifique.
 * @param {React.HTMLAttributes<HTMLParagraphElement> & NumberLinkProps} props
 * @returns {JSX.Element}
 */
export function NumberLink({
  index,
  position,
  display = true,
  onChange,
}: NumberLinkProps) {
  if (display) {
    return (
      <li>
        <a
          className={classNames('fr-pagination__link')}
          aria-current={position === index ? 'page' : undefined}
          href="#"
          onClick={(e) => {
            e.preventDefault()
            if (position != index) {
              onChange(index)
            }
          }}
          title={`Page ${index}`}
        >
          {`${index}`}
        </a>
      </li>
    )
  }
  return null
}
