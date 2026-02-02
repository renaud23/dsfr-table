/**
 * 3 petits points pour séparer les pages de début et de fin du pager.
 * @param param0
 * @returns
 */
export function Separator({ display }: { display: boolean }) {
  if (display) {
    return (
      <li>
        <span className="fr-pagination__link fr-hidden fr-unhidden-lg">…</span>
      </li>
    )
  }
  return null
}
