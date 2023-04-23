import { CSSProperties } from 'react'

export type Colors = Record<'start' | 'end', string>
export type Percentage = `${string}%`

export type Direction = 'x' | 'y'
export interface Stop {
  stop: [Unit, Unit]
  color: string
  name: string
}

export type Unit =
  | `${string}%`
  | `${string}px`
  | `${string}fr`
  | `${string}vh`
  | `${string}vw`
  | `calc(${string})`

export interface Stops extends Array<Stop> {}

export interface useDegradadoProps {
  items: Stops
  direction?: Direction
  minHeight?: Unit
  layout?: string
  onSelect?: (name: string) => void
  gap?: Unit
}

export interface useDegradadoReturn {
  styles: CSSProperties
  onClick?: (event: React.MouseEvent<HTMLElement | SVGSVGElement>) => void
}

export interface useEventDegradadoProps {
  direction: Direction
  items: Stops
  onSelect?: (name: string) => void
}

export interface useDegradadoRepeatProps {
  colors: Colors
  size: Percentage
  direction?: Direction
  onSelect: (percentage: number) => void
  minHeight?: string
}

export interface useEventDegradadoRepeatProps {
  direction: Direction
  onSelect?: (position: number) => void
  size: Percentage
}
