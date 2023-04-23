export type Unit =
  | `${string}%`
  | `${string}px`
  | `${string}fr`
  | `calc(${string})`

export interface Stop {
  stop: Unit
  color: string
  name: string
}

export interface ResultProps {
  success?: boolean
}
export type Direction = 'x' | 'y'

export type WithClassName<T> = T & { className?: string }
export type WithOnSelect<T> = T & { onSelect: (result: boolean) => void }

export type WithResultColors<T> = T & {
  successColor?: string
  failColor?: string
}

export const customGradient = (stops: Stop[], direction: Direction): string =>
  `repeating-linear-gradient(${direction === 'x' ? '90deg' : '0deg'}, ${stops
    .reduce((acc, current) => `${acc}${current.color} ${current.stop},`, '')
    .slice(0, -1)})`

export function transformResultsIntoStops(
  input: any[],
  successColor: string,
  failColor: string,
): Stop[] {
  const output: Stop[] = []
  const successCount = input.filter(item => item.success).length
  const totalLength = input.length
  const percentageIncrement = 100 / totalLength

  input.sort((a, b) =>
    a.success === b.success ? 0 : (a.success as boolean) ? -1 : 1,
  )

  let successStop = 0
  let failureStop = successCount * percentageIncrement

  for (let i = 0; i < totalLength; i++) {
    const color = (input[i].success as boolean) ? successColor : failColor
    const stop = (input[i].success as boolean) ? successStop : failureStop
    const { name } = input[i]

    output.push({ color, stop: `${stop.toFixed(0)}%`, name })

    if (input[i].success as boolean) {
      successStop += percentageIncrement
    } else {
      failureStop += percentageIncrement
    }

    output.push({
      color,
      stop: `${(stop + percentageIncrement).toFixed(0)}%`,
      name,
    })
  }

  return output
}

export const inflect =
  (singular: string, plural = `${singular}s`) =>
  (quantity: number) =>
    Math.abs(quantity) === 0 || Math.abs(quantity) === 1 ? singular : plural
