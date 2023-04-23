import { Fragment, useState } from 'react'
import SpaceDemo from './stories/Space'
import RepeatDemo from './stories/Repeat'
import UiDemo from './stories/Ui'
import MeterDemo from './stories/Meter'
import ResultsDemo from './stories/results/story'
import ChartDemo from './stories/charts/story'
import { useDegradado } from './package'
import Fence from './stories/Fence'
import { scrollToElement } from './stories/utils'

const COLORS = ['#999', '#888', '#666', '#444', '#333', '#222']

export const ACCENT_COLOR = 'rgba(253, 236, 191, 1)'

function App(): JSX.Element {
  const [items, setItems] = useState<any[]>([
    { name: 'Meter', color: '#999', stop: ['0%', '16%'] },
    { name: 'Space', color: '#888', stop: ['16%', '32%'] },
    { name: 'UI', color: '#666', stop: ['32%', '48%'] },
    { name: 'Repeat', color: '#444', stop: ['48%', '64%'] },
    { name: 'Results', color: '#333', stop: ['64%', '80%'] },
    { name: 'Charts', color: '#222', stop: ['80%', '100%'] },
  ])

  const updateNext = (pos: number): void => {
    setItems(prev =>
      prev.map((item, index) => {
        if (pos === index) {
          return { ...item, color: ACCENT_COLOR }
        }
        return { ...item, color: COLORS[index] }
      }),
    )
  }
  const { styles, onClick } = useDegradado({
    items,
    minHeight: '99vh',
    direction: 'y',
    onSelect: name => {
      const pos = items.findIndex(item => item.name === name)
      const selector = `#demo-${pos}`
      const section = document.querySelector(selector)
      if (section !== null) {
        scrollToElement(selector)
      }
    },
  })
  return (
    <Fragment>
      <h1>
        Degradados <br aria-hidden="true" /> for meaning
        <br aria-hidden="true" /> not aesthetics
      </h1>
      <main>
        <Fence
          onChange={on => {
            if (on) {
              updateNext(0)
            }
          }}
        >
          <MeterDemo />
        </Fence>
        <Fence
          onChange={on => {
            if (on) {
              updateNext(1)
            }
          }}
        >
          <SpaceDemo />
        </Fence>
        <Fence
          onChange={on => {
            if (on) {
              updateNext(2)
            }
          }}
        >
          <UiDemo />
        </Fence>
        <Fence
          onChange={on => {
            if (on) {
              updateNext(3)
            }
          }}
        >
          <RepeatDemo />
        </Fence>

        <h2>
          Advanced <br aria-hidden="true" /> demos
        </h2>

        <Fence
          onChange={on => {
            if (on) {
              updateNext(4)
            }
          }}
        >
          <ResultsDemo />
        </Fence>
        <Fence
          onChange={on => {
            if (on) {
              updateNext(5)
            }
          }}
        >
          <ChartDemo />
        </Fence>

        <aside
          aria-hidden="true"
          style={{
            ...styles,
            position: 'fixed',
            right: 0,
            top: 0,
            width: '58px',
            transform: 'rotate(180deg)',
          }}
          onClick={onClick}
        ></aside>
      </main>
    </Fragment>
  )
}

export default App
