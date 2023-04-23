import { toast } from 'react-toastify'
import { useDegradadoRepeat } from '../package'

const WORKING_HOURS = [
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
]

const WORKING_DAYS = ['MO', 'TU', 'WD', 'TH', 'FR']
const WEEKEND = ['SATURDAY', 'SUNDAY']
const SEASONS = ['Q1', 'Q2', 'Q3', 'Q4']

function RepeatDemo(): JSX.Element {
  const { styles: stylesA, onClick: onClickA } = useDegradadoRepeat({
    colors: {
      start: 'rgba(0,0,0,.2)',
      end: 'rgba(0,0,0,.7)',
    },
    direction: 'y',
    size: '12.5%',
    minHeight: '380px',
    onSelect: period => {
      toast(`Selected ${WORKING_HOURS[period]}`, {
        className: 'toast',
        bodyClassName: 'toast-body-repeat',
        position: 'top-left',
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    },
  })

  const { styles: stylesB, onClick: onClickB } = useDegradadoRepeat({
    colors: {
      start: 'rgba(0,0,0,.2)',
      end: 'rgba(0,0,0,.7)',
    },
    direction: 'x',
    size: '20%',
    minHeight: '380px',
    onSelect: period => {
      toast(`Selected ${WORKING_DAYS[period]}`, {
        className: 'toast',
        bodyClassName: 'toast-body-repeat',
        position: 'top-left',
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    },
  })

  const { styles: stylesC, onClick: onClickC } = useDegradadoRepeat({
    colors: {
      start: 'rgba(0,0,0,.2)',
      end: 'rgba(0,0,0,.7)',
    },
    direction: 'x',
    size: '50%',
    onSelect: period => {
      toast(`Selected ${WEEKEND[period]}`, {
        className: 'toast',
        bodyClassName: 'toast-body-repeat',
        position: 'top-left',
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    },
  })

  const { styles: stylesD, onClick: onClickD } = useDegradadoRepeat({
    colors: {
      start: 'rgba(0,0,0,.2)',
      end: 'rgba(0,0,0,.7)',
    },
    direction: 'x',
    size: '25%',
    onSelect: period => {
      toast(`Selected ${SEASONS[period]}`, {
        className: 'toast',
        bodyClassName: 'toast-body-repeat',
        position: 'top-left',
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    },
  })
  return (
    <div data-ad="" className="quicksand" id="demo-3">
      <div data-ad-item="4">
        <div className="row gap align-self-center">
          <div className="col" style={{ transform: 'translateY(-.1em)' }}>
            {WORKING_HOURS.map((l, pos) => (
              <p key={`${l}-${pos}`}>{l}</p>
            ))}
          </div>
          <div className="flex-1">
            <div style={{ ...stylesA, minWidth: '200px' }} onClick={onClickA} />
          </div>
        </div>
      </div>

      <div data-ad-item="4">
        <div className="col gap fill">
          <div style={stylesB} onClick={onClickB} />
          <div className="row fill text-center">
            {WORKING_DAYS.map((l, pos) => (
              <p className="flex-1" key={`${l}-${pos}`}>
                {l}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div data-ad-item="4">
        <div style={stylesC} onClick={onClickC} />
        <div className="row fill">
          {WEEKEND.map((l, pos) => (
            <p className="flex-1" key={`${l}-${pos}`}>
              {l}
            </p>
          ))}
        </div>
        <div style={stylesD} onClick={onClickD} />
        <div className="row fill ">
          {SEASONS.map((l, pos) => (
            <p className="flex-1" key={`${l}-${pos}`}>
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RepeatDemo
