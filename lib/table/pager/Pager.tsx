import { useCallback, useState } from 'react'

import { ButtonFirstPage } from './ButtonFirstPage'
import { ButtonLastPage } from './ButtonLastPage'
import { ButtonNextPage } from './ButtonNextPage'
import { ButtonPreviousPage } from './ButtonPreviousPage'
import { NumberLink } from './NumberLink'
import { Separator } from './Separator'

export type OnChangePageEvent = (index: number) => void

type PagerProps = {
  nbPages: number
  position: number
  onChange: OnChangePageEvent
}

export type ButtonPager = PagerProps

function initialiseNumbers(
  position: number,
  nbPages: number,
): [number, number] {
  const first = Math.min(Math.max(position - 2, 1), nbPages - 3)
  const last = nbPages - 2
  return [first, last]
}

/**
 *
 * @param props
 * @returns
 */
export function Pager(props: PagerProps) {
  const { nbPages, position, onChange } = props

  const [[first, last], setNumberRefs] = useState<[number, number]>(() =>
    initialiseNumbers(position, nbPages),
  )

  const handleChange = useCallback(
    (index: number) => {
      setNumberRefs(initialiseNumbers(index, nbPages))
      onChange(index)
    },
    [nbPages, onChange],
  )

  return (
    <nav role="navigation" className="fr-pagination" aria-label="pagination">
      <ul className="fr-pagination__list">
        <ButtonFirstPage position={position} onChange={handleChange} />
        <ButtonPreviousPage position={position} onChange={handleChange} />
        <NumberLink
          position={position}
          index={first}
          display={true}
          onChange={onChange}
        />
        <NumberLink
          position={position}
          index={first + 1}
          display={nbPages > 1}
          onChange={onChange}
        />
        <NumberLink
          position={position}
          index={first + 2}
          display={nbPages > 2}
          onChange={onChange}
        />
        <Separator display={nbPages > 6} />
        <NumberLink
          index={last}
          position={position}
          display={last > first + 2}
          onChange={onChange}
        />
        <NumberLink
          index={last + 1}
          position={position}
          display={last > first + 1}
          onChange={onChange}
        />
        <NumberLink
          index={last + 2}
          position={position}
          display={last > first}
          onChange={onChange}
        />
        <ButtonNextPage
          nbPages={nbPages}
          position={position}
          onChange={handleChange}
        />
        <ButtonLastPage
          nbPages={nbPages}
          position={position}
          onChange={handleChange}
        />
      </ul>
    </nav>
  )
}
