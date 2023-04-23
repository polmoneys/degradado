import { MouseEvent, useCallback } from 'react'
import { useEventDegradadoRepeatProps } from './types'

function useEventDegradadoRepeat(props: useEventDegradadoRepeatProps) {
  const { direction, onSelect, size } = props

  const onClick = useCallback(
    (event: MouseEvent<HTMLElement | SVGSVGElement>) => {
      const svg = event.currentTarget
      const rect = svg.getBoundingClientRect()
      const position =
        direction === 'x' ? event.clientX - rect.left : event.clientY - rect.top
      const percentage =
        (position / (direction === 'x' ? rect.width : rect.height)) * 100

      const stopSize = Number(size.replace('%', ''))
      const itemPosition = Math.floor(percentage / stopSize)

      onSelect?.(itemPosition)
    },
    [direction, onSelect, size],
  )
  return { onClick }
}

export default useEventDegradadoRepeat
