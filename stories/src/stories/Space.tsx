import { toast } from 'react-toastify'
import { useDegradado } from '../package'
import { ACCENT_COLOR } from '../App'

function SpaceDemo(): JSX.Element {
  const { styles: stylesA, onClick: onClickA } = useDegradado({
    items: [
      { name: 'Pictures', color: '#666', stop: ['0%', '15%'] },
      { name: 'Music', color: '#444', stop: ['15%', '65%'] },
      { name: 'Free', color: ACCENT_COLOR, stop: ['65%', '100%'] },
    ],
    direction: 'x',
    onSelect: name => {
      toast(`${name}`, {
        className: 'toast',
        bodyClassName: 'toast-body-space',
        position: 'top-left',
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    },
  })

  const { styles: stylesB, onClick: onClickB } = useDegradado({
    items: [
      { name: 'Music', color: '#666', stop: ['0%', '65%'] },
      { name: 'Free', color: ACCENT_COLOR, stop: ['65%', '100%'] },
    ],
    direction: 'x',
    onSelect: name => {
      toast(`${name}`, {
        className: 'toast',
        bodyClassName: 'toast-body-space',
        position: 'top-left',
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      })
    },
  })

  const { styles: stylesC, onClick: onClickC } = useDegradado({
    items: [
      { name: 'Pictures', color: '#888', stop: ['0%', '15%'] },
      { name: 'Memes', color: '#666', stop: ['15%', '30%'] },
      { name: 'Music', color: '#444', stop: ['30%', '65%'] },
      { name: 'Free', color: ACCENT_COLOR, stop: ['65%', '100%'] },
    ],
    direction: 'x',
    onSelect: name => {
      toast(`${name}`, {
        className: 'toast',
        bodyClassName: 'toast-body-space',
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
    <div data-ad="" className="quicksand" id="demo-1">
      <div data-ad-item="6">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 36'}
          width="100%"
          height="2em"
          style={{ ...stylesA, cursor: 'pointer' }}
          {...(onClickA !== undefined && { onClick: onClickA })}
        />
        <div className="row gap fill ">
          <p>Pics 15%</p>
          <p className="flex-1">Music 50%</p>
          <p>Free 35%</p>
        </div>
      </div>
      <div data-ad-item="6">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 36'}
          width="100%"
          height="2em"
          style={{ ...stylesB, cursor: 'pointer' }}
          {...(onClickB !== undefined && { onClick: onClickB })}
        />
        <div className="row fill">
          <p>Music 65%</p>
          <p className="ml-auto">Free 35%</p>
        </div>
      </div>

      <div data-ad-item="12">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 36'}
          width="100%"
          height="2em"
          style={{ ...stylesC, cursor: 'pointer' }}
          {...(onClickC !== undefined && { onClick: onClickC })}
        />
        <div className="row fill gap">
          <p className="mr-auto">Pics 15%</p>
          <p className="mr-auto">Memes 15%</p>
          <p className="mr-auto">Music 35%</p>
          <p className="ml-auto">Free 35%</p>
        </div>
      </div>
    </div>
  )
}

export default SpaceDemo
