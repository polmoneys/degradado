import { type CSSProperties } from 'react'
import { ACCENT_COLOR } from '../../App'

interface ChartProps {
  values: number[]
  gradient?: string
  barWidth?: number
  minHeight?: number
  labelColor?: string
}

const ChartY = (props: ChartProps): JSX.Element => {
  const {
    values,
    gradient = `0deg, lightgrey 3%,${ACCENT_COLOR}100%`,
    minHeight = 200,
    barWidth = '1.9em',
    labelColor = 'currentColor',
  } = props
  const maxValue = Math.max(...values)

  const getGradientStyles = (value: number): CSSProperties => {
    const inverse = (100 / value) * 100
    const normalizedHeight = (value / maxValue) * minHeight
    const styles = {
      backgroundImage: `linear-gradient(${gradient})`,
      backgroundSize: `${inverse}% 100%`,
      height: `${normalizedHeight}px`,
      flex: 1,
      width: barWidth,
      justifyContent: 'center',
      display: 'grid',
      alignItems: 'center',
      color: labelColor,
    }
    return styles
  }

  return (
    <ol
      style={{
        height: `${minHeight}px`,
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {values.map((value, index) => (
        <li key={index} style={getGradientStyles(value)}>
          <span className="visually-hidden"> {value}</span>
        </li>
      ))}
    </ol>
  )
}

export default ChartY
