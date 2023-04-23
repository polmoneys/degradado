import { MouseEvent, useCallback } from 'react'
import { useEventDegradadoProps } from './types'

function useEventDegradado(props: useEventDegradadoProps) {
  const { direction, items, onSelect } = props

  const onClick = useCallback(
    (event: MouseEvent<HTMLElement | SVGSVGElement>) => {
      const svg = event.currentTarget
      const rect = svg.getBoundingClientRect()
      const position =
        direction === 'x' ? event.clientX - rect.left : event.clientY - rect.top
      const percentage =
        (position / (direction === 'x' ? rect.width : rect.height)) * 100

      const selectedItem = items.find((item, index, arr) => {
        const currentPercentage = parseFloat(item.stop[0])
        const nextPercentage =
          index < arr.length - 1 ? parseFloat(arr[index + 1].stop[0]) : 100
        return percentage >= currentPercentage && percentage <= nextPercentage
      })

      if (selectedItem != null) {
        onSelect?.(selectedItem.name)
      } else {
        console.warn('No item selected')
      }
    },
    [direction, items, onSelect],
  )

  return { onClick }
}

export default useEventDegradado
