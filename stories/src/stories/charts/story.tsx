import Chart from './Chart'
import ChartY from './ChartY'

function ChartDemo(): JSX.Element {
  return (
    <div data-ad="" className="quicksand" id="demo-5">
      <div data-ad-item="3">
        <div style={{ width: '220px' }}>
          <Chart values={[120]} />
        </div>
      </div>
      <div data-ad-item="3">
        <div style={{ width: '220px' }}>
          <Chart values={[120, 80]} />
        </div>
      </div>

      <div data-ad-item="3">
        <ChartY minHeight={350} values={[120, 80, 40, 70, 80]} />
      </div>
      <div data-ad-item="3">
        <ChartY minHeight={350} values={[120, 80]} />
      </div>

      <div data-ad-item="6">
        <div className="fill">
          <Chart values={[10, 20, 120, 80, 40, 70, 80]} />
        </div>
      </div>

      <div data-ad-item="6">
        <ChartY minHeight={350} values={[10, 20, 120, 80, 40, 70, 80]} />
      </div>
    </div>
  )
}

export default ChartDemo
