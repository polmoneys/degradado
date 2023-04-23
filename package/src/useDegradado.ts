import { useMemo } from 'react'
import { customGradient } from './utils'
import useEventDegradado from './useEventDegradado'
import { useDegradadoProps, useDegradadoReturn } from './types'

function useDegradado(props: useDegradadoProps): useDegradadoReturn {
  const {
    items,
    direction = 'x',
    minHeight = '2em',
    layout,
    onSelect,
    gap = 0,
  } = props
  const hasLayout = layout !== undefined
  const custom = useMemo(
    () => customGradient(items, direction),
    [items, direction],
  )

  const styles = {
    background: custom,
    minHeight,
    width: '100%',
    display: 'grid',
    gap,
    ...(direction === 'x' &&
      hasLayout && {
        gridTemplateColumns: layout,
      }),
    ...(direction === 'y' &&
      hasLayout && {
        gridTemplateRows: layout,
      }),
  } as Record<string, string>

  const { onClick } = useEventDegradado({ direction, items, onSelect })

  return {
    styles,
    ...(onSelect !== undefined && { onClick }),
  }
}

export default useDegradado
