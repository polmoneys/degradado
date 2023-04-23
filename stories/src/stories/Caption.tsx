import { Fragment } from 'react'
import { type Files } from './results/story'

interface CaptionProps {
  m: 'fail' | 'success' | ''
  isOpen: boolean
  results: Files
}

export const Caption = (props: CaptionProps): JSX.Element => {
  const isFail = props.m === 'fail'
  const items = props.results.filter(r =>
    isFail ? r.success !== undefined && !r.success : r.success,
  )
  return props.isOpen ? (
    <div className="caption col">
      <div className="row">
        <p> {props.m}</p>
        <span className={isFail ? 'failb' : 'successb'}></span>
      </div>
      <div className="row" style={{ flexWrap: 'wrap', gap: '0.2em' }}>
        {items.map(item => (
          <p key={item.id}>- {item.name}</p>
        ))}
      </div>
    </div>
  ) : (
    <Fragment />
  )
}
