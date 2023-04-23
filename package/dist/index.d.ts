type Colors = Record<'start' | 'end', string>
type Percentage = `${string}%`

type Direction = 'x' | 'y'
interface Stop {
  stop: [Unit, Unit]
  color: string
  name: string
}

type Unit =
  | `${string}%`
  | `${string}px`
  | `${string}fr`
  | `${string}vh`
  | `${string}vw`
  | `calc(${string})`

interface Stops extends Array<Stop> {}

interface useDegradadoProps {
  items: Stops
  direction?: Direction
  minHeight?: Unit
  layout?: string
  onSelect?: (name: string) => void
  gap?: Unit
}

interface useDegradadoReturn {
  styles: Record<string, string>
  onClick?: (event: React.MouseEvent<HTMLElement | SVGSVGElement>) => void
}

interface useDegradadoRepeatProps {
  colors: Colors
  size: Percentage
  direction?: Direction
  onSelect: (percentage: number) => void
  minHeight?: string
}

declare function useDegradado(props: useDegradadoProps): useDegradadoReturn;

declare function useDegradadoRepeat(props: useDegradadoRepeatProps): useDegradadoReturn;

export { useDegradado, useDegradadoRepeat };
