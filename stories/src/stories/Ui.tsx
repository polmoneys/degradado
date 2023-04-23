import { ACCENT_COLOR } from '../App'
import { useDegradado } from '../package'
import { IconCross, IconQuestion, IconStar } from './Icon/Icon'

function UiDemo(): JSX.Element {
  const { styles } = useDegradado({
    items: [
      { color: '#888', name: 'prefix', stop: ['0px', '48px'] },
      {
        color: 'transparent',
        name: 'main',
        stop: ['48px', 'calc(100% - 48px)'],
      },
      {
        color: ACCENT_COLOR,
        name: 'sufix',
        stop: ['calc(100% - 48px)', '100%'],
      },
    ],
    direction: 'x',
    layout: '48px 1fr 48px',
  })

  const { styles: stylesB } = useDegradado({
    items: [
      {
        color: 'transparent',
        name: 'main',
        stop: ['0px', 'calc(100% - 48px)'],
      },
      {
        color: ACCENT_COLOR,
        name: 'sufix',
        stop: ['calc(100% - 48px)', '100%'],
      },
    ],
    direction: 'x',
    layout: '1fr 48px',
  })

  const { styles: stylesC } = useDegradado({
    items: [
      { color: '#888', name: 'prefix', stop: ['0px', '48px'] },
      { color: 'transparent', name: 'main', stop: ['48px', '100%'] },
    ],
    direction: 'x',
    layout: '48px 1fr',
  })

  const { styles: stylesD } = useDegradado({
    items: [
      {
        color: 'transparent',
        name: 'main',
        stop: ['0px', 'calc(100% - 48px)'],
      },
      {
        color: ACCENT_COLOR,
        name: 'prefix',
        stop: ['calc(100% - 48px)', '100%'],
      },
    ],
    minHeight: '50vh',
    direction: 'y',
    layout: '48px 1fr',
  })

  const { styles: stylesE } = useDegradado({
    items: [
      { color: ACCENT_COLOR, name: 'sufix', stop: ['0px', '48px'] },
      {
        color: 'transparent',
        name: 'main',
        stop: ['48px', 'calc(100% - 48px)'],
      },
      {
        color: 'transparent',
        name: 'prefix',
        stop: ['calc(100% - 48px)', '100%'],
      },
    ],
    minHeight: '50vh',

    direction: 'y',
    layout: '48px 1fr 48px',
  })

  return (
    <div data-ad="" className="quicksand" id="demo-2">
      <div
        data-ad-item="6"
        style={{
          padding: 0,
          minHeight: 'auto',
        }}
        className="interactive-group"
      >
        <div
          style={{
            ...stylesB,
            placeContent: 'center',
            placeItems: 'center',
            minHeight: '1em',
          }}
        >
          <input type="text" placeholder="Write..." className="input" />
          <IconStar label="" />
        </div>
      </div>
      <div
        data-ad-item="6"
        style={{
          padding: 0,
          minHeight: 'auto',
        }}
        className="interactive-group"
      >
        <div
          style={{
            ...stylesC,
            placeContent: 'center',
            placeItems: 'center',
            minHeight: '1em',
          }}
        >
          <IconQuestion label="" />

          <input type="text" placeholder="Write..." className="input" />
        </div>
      </div>

      <div
        data-ad-item="4"
        style={{
          padding: 0,
          minHeight: 'auto',
        }}
      >
        <div
          style={{ ...styles, placeContent: 'center', placeItems: 'center' }}
        >
          <IconQuestion label="" />

          <p
            style={{
              padding: '0 .2em',
              fontSize: '70%',
            }}
          >
            List item content
          </p>
          <IconStar label="" />
        </div>
      </div>

      <div
        data-ad-item="4"
        style={{
          padding: 0,
          minHeight: 'auto',
        }}
      >
        <div
          style={{ ...stylesB, placeContent: 'center', placeItems: 'center' }}
        >
          <p
            style={{
              placeSelf: 'start',
              padding: '0 .2em',
              fontSize: '70%',
            }}
          >
            List item content
          </p>
          <IconStar label="" />
        </div>
      </div>

      <div
        data-ad-item="4"
        style={{
          padding: 0,
          minHeight: 'auto',
        }}
      >
        <div
          style={{ ...stylesC, placeContent: 'center', placeItems: 'center' }}
        >
          <IconQuestion label="" />

          <p
            style={{
              placeSelf: 'start',
              padding: '0 .2em',
              fontSize: '70%',
            }}
          >
            List item content
          </p>
        </div>
      </div>

      <div
        data-ad-item="6"
        style={{
          padding: 0,
        }}
      >
        <div
          style={{
            ...stylesD,
            padding: '0 .2em',
          }}
        >
          <div className="row align-center">
            <p> Dialog Title </p>

            <IconCross label="" className="ml-auto" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div
        data-ad-item="6"
        style={{
          padding: 0,
        }}
      >
        <div
          style={{
            ...stylesE,
            padding: '0 .2em',
          }}
        >
          <div className="row align-center">
            <p> Dialog Title </p>

            <IconCross label="" className="ml-auto" />
          </div>

          <p
            style={{
              alignSelf: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p
            style={{
              alignSelf: 'center',
            }}
          >
            {' '}
            Dialog Footer{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UiDemo
