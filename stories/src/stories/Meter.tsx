import { toast } from 'react-toastify'
import { useDegradado } from '../package'

function MeterDemo(): JSX.Element {
  const { styles: stylesA, onClick: onClickA } = useDegradado({
    items: [
      { name: 'Progress', color: '#444', stop: ['0%', '15%'] },
      { name: 'To do', color: '#888', stop: ['15%', '100%'] },
    ],
    direction: 'x',
    onSelect: name => {
      toast(
        <p>
          <small>Selected:</small>
          <b>{name}</b>
        </p>,
        {
          className: 'toast',
          bodyClassName: 'toast-body-meter',
          position: 'top-left',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        },
      )
    },
  })
  const { styles: stylesB, onClick: onClickB } = useDegradado({
    items: [
      { name: 'Progress', color: '#444', stop: ['0%', '50%'] },
      { name: 'To do', color: '#888', stop: ['50%', '100%'] },
    ],
    direction: 'x',
    onSelect: name => {
      toast(
        <p>
          <small>Selected:</small>
          <b>{name}</b>
        </p>,
        {
          className: 'toast',
          bodyClassName: 'toast-body-meter',
          position: 'top-left',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        },
      )
    },
  })
  const { styles: stylesC, onClick: onClickC } = useDegradado({
    items: [
      { name: 'Progress', color: '#444', stop: ['0%', '75%'] },
      { name: 'To do', color: '#888', stop: ['75%', '100%'] },
    ],
    direction: 'x',
    onSelect: name => {
      toast(
        <p>
          <small>Selected:</small>
          <b>{name}</b>
        </p>,
        {
          className: 'toast',
          bodyClassName: 'toast-body-meter',
          position: 'top-left',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        },
      )
    },
  })

  const { styles: stylesD, onClick: onClickD } = useDegradado({
    items: [
      { name: 'Progress', color: '#444', stop: ['0%', '96%'] },
      { name: 'To do', color: '#888', stop: ['96%', '100%'] },
    ],
    direction: 'x',
    onSelect: name => {
      toast(
        <p>
          <small>Selected:</small>
          <b>{name}</b>
        </p>,
        {
          className: 'toast',
          bodyClassName: 'toast-body-meter',
          position: 'top-left',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        },
      )
    },
  })
  const { styles: stylesE, onClick: onClickE } = useDegradado({
    items: [
      { name: 'Progress', color: '#444', stop: ['0%', '50%'] },
      { name: 'To do', color: '#888', stop: ['50%', '100%'] },
    ],
    direction: 'y',
    onSelect: name => {
      toast(
        <p>
          <small>Selected:</small>
          <b>{name}</b>
        </p>,
        {
          className: 'toast',
          bodyClassName: 'toast-body-meter',
          position: 'top-left',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        },
      )
    },
  })
  const { styles: stylesF, onClick: onClickF } = useDegradado({
    items: [
      { name: 'Progress', color: '#444', stop: ['0%', '15%'] },
      { name: 'To do', color: '#888', stop: ['15%', '100%'] },
    ],
    direction: 'y',
    onSelect: name => {
      toast(
        <p>
          <small>Selected:</small>
          <b>{name}</b>
        </p>,
        {
          className: 'toast',
          bodyClassName: 'toast-body-meter',
          position: 'top-left',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        },
      )
    },
  })

  const { styles: stylesG, onClick: onClickG } = useDegradado({
    items: [
      { name: 'Progress', color: '#444', stop: ['0%', '96%'] },
      { name: 'To do', color: '#888', stop: ['96%', '100%'] },
    ],
    direction: 'y',
    onSelect: name => {
      toast(
        <p>
          <small>Selected:</small>
          <b>{name}</b>
        </p>,
        {
          className: 'toast',
          bodyClassName: 'toast-body-meter',
          position: 'top-left',
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        },
      )
    },
  })

  return (
    <div data-ad="" className="quicksand" id="demo-0">
      <div data-ad-item="3">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 36'}
          width="100%"
          height="2em"
          style={{ ...stylesA, cursor: 'pointer' }}
          {...(onClickA !== undefined && { onClick: onClickA })}
        />
        <p>Progress 15%</p>
      </div>
      <div data-ad-item="3">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 36'}
          width="100%"
          height="2em"
          style={{ ...stylesB, cursor: 'pointer' }}
          {...(onClickB !== undefined && { onClick: onClickB })}
        />
        <p>Uploading 50%</p>
      </div>
      <div data-ad-item="3">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 36'}
          width="100%"
          height="2em"
          style={{ ...stylesC, cursor: 'pointer' }}
          {...(onClickC !== undefined && { onClick: onClickC })}
        />
        <p>Finishing 75%</p>
      </div>
      <div data-ad-item="3">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 36'}
          width="100%"
          height="2em"
          style={{ ...stylesD, cursor: 'pointer' }}
          {...(onClickE !== undefined && { onClick: onClickD })}
        />
        <p>Almost done 96%</p>
      </div>
      <div data-ad-item="5">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 100'}
          width="100%"
          height="100"
          style={{ ...stylesE, cursor: 'pointer' }}
          {...(onClickE !== undefined && { onClick: onClickE })}
        />
        <p>Half 50%</p>
      </div>
      <div data-ad-item="2">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 100'}
          width="100%"
          height="100"
          style={{ ...stylesF, cursor: 'pointer' }}
          {...(onClickF !== undefined && { onClick: onClickF })}
        />
        <p>Low 15%</p>
      </div>
      <div data-ad-item="5">
        <svg
          aria-hidden="true"
          viewBox={'0 0 100 100'}
          width="100%"
          height="100"
          style={{ ...stylesG, cursor: 'pointer' }}
          {...(onClickG !== undefined && { onClick: onClickG })}
        />
        <p>Full 96%</p>
      </div>
    </div>
  )
}

export default MeterDemo
