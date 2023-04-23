import { CSSProperties, useMemo } from 'react'
import useEventDegradadoRepeat from './useEventDegradadoRepeat'
import { useDegradadoRepeatProps, useDegradadoReturn } from './types'
import { repeatGradient } from './utils'

function useDegradadoRepeat(
  props: useDegradadoRepeatProps,
): useDegradadoReturn {
  const { colors, size, direction = 'x', onSelect, minHeight = '2em' } = props
  const custom = useMemo(
    () => repeatGradient(colors, size, direction),
    [colors, size, direction],
  )

  const styles = {
    background: custom,
    minHeight,
    width: '100%',
    display: 'grid',
    cursor: 'pointer',
  } as CSSProperties

  const { onClick } = useEventDegradadoRepeat({ direction, onSelect, size })

  return {
    styles,
    ...(onSelect !== undefined && { onClick }),
  }
}

export default useDegradadoRepeat
