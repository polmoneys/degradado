import { useCallback, useMemo } from 'react'
import {
  ResultProps,
  Stop,
  WithClassName,
  WithOnSelect,
  WithResultColors,
  customGradient,
  transformResultsIntoStops,
} from './utils'
interface Props<T> {
  results: T[]
  onHover?: (result: boolean) => void
}

function ResultsY<T extends ResultProps>(
  props: Props<T> &
    WithClassName<Props<T>> &
    WithOnSelect<Props<T>> &
    WithResultColors<Props<T>>,
): JSX.Element {
  const {
    results,
    className,
    onSelect,
    onHover,
    successColor = 'dodgerblue',
    failColor = 'red',
  } = props
  const matched: Stop[] = transformResultsIntoStops(
    results,
    successColor,
    failColor,
  )
  const bg = customGradient(matched, 'y')

  const division = useMemo(() => {
    const successCount = results.filter(item => item.success).length
    const totalLength = results.length
    const percentageIncrement = 100 / totalLength
    return successCount * percentageIncrement
  }, [results])

  const findStop = useCallback(
    (positionPercentage: number) => {
      const inversePercentage = 100 - positionPercentage
      return inversePercentage < division ? successColor : failColor
    },
    [division, successColor, failColor],
  )

  const onEvent = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement>,
      callback: (result: boolean) => void,
    ) => {
      const div = event.currentTarget
      const rect = div.getBoundingClientRect()
      const position = event.clientY - rect.top
      const percentage = (position / rect.height) * 100

      const color = findStop(percentage)
      const r = color === successColor
      callback(r)
    },
    [findStop, successColor],
  )

  const onHoverChange = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (onHover === undefined) return
      onEvent(event, onHover)
    },
    [onEvent, onHover],
  )

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      onEvent(event, onSelect)
    },
    [onEvent, onSelect],
  )

  return (
    <div
      aria-hidden="true"
      {...(className !== undefined && { className })}
      style={{
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        minHeight: '2em',
        background: bg,
      }}
      {...(onHover !== undefined && { onMouseMove: onHoverChange })}
      onClick={onClick}
    />
  )
}

export default ResultsY
