import {
  type Colors,
  type Direction,
  type Percentage,
  type Stops,
} from './types'

export const customGradient = (stops: Stops, direction: Direction): string =>
  `repeating-linear-gradient(${direction === 'x' ? '90deg' : '0deg'}, ${stops
    .reduce(
      (acc, current) =>
        `${acc}${current.color} ${current.stop[0]},${current.color} ${current.stop[1]},`,
      '',
    )
    .slice(0, -1)})`

export const repeatGradient = (
  colors: Colors,
  size: Percentage,
  direction: Direction,
): string => `repeating-linear-gradient(
        ${direction === 'x' ? '90deg' : '0deg'},
        ${colors?.start ?? 'currentColor'}, 
        ${colors?.start ?? 'currentColor'} ${size},
        ${colors?.end ?? 'transparent'} ${size},
        ${colors?.end ?? 'transparent'} ${Number(size.replace('%', '')) * 2}%)`
