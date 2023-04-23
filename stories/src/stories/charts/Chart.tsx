import { type CSSProperties } from 'react'
import { ACCENT_COLOR } from '../../App'

interface ChartProps {
  values: number[]
  gradient?: string
  minHeight?: number
  labelColor?: string
}

const Chart = (props: ChartProps): JSX.Element => {
  const {
    values,
    gradient = `90deg, lightgrey 3%,${ACCENT_COLOR}100%`,
    minHeight = '2em',
    labelColor = 'currentColor',
  } = props

  const maxValue = Math.max(...values)

  const getGradientStyles = (value: number): CSSProperties => {
    const inverse = (100 / value) * 100
    const percentageWidth = (value / maxValue) * 100

    const styles = {
      backgroundImage: `linear-gradient(${gradient})`,
      ...(percentageWidth !== 100 && {
        backgroundSize: `${inverse}% 100%`,
      }),
      width: `${percentageWidth}%`,
      height: minHeight,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '0.2em',
      color: labelColor,
    }
    return styles
  }

  return (
    <ol>
      {values.map((value, index) => (
        <li key={index} style={getGradientStyles(value)}>
          {value}
        </li>
      ))}
    </ol>
  )
}

export default Chart
