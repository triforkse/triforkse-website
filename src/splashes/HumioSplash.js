import React from 'react';
import BEM from '../BEM';
import Chart from './Chart';

import './HumioSplash.css';

const splash = BEM("splash");

export default React.createClass({

  getInitialState () {
    return {
      ingestionRate: 13.2,
      compressionRatio: 85.12,
    }
  },

  componentDidMount() {

    const updateNumber = () => {
      this.setState({ingestionRate: (Math.random() * 3 + 12).toFixed(1)});
    }

    setInterval(updateNumber, 200);

    const updateRatio = () => {
      this.setState({compressionRatio: (85 + Math.random()).toFixed(2)});
    }

    setInterval(updateRatio, 1500);

  },

  render() {
    const ingestionRate = this.state.ingestionRate;
    const compressionRatio = this.state.compressionRatio;

    const chart1 = (
      <div key="humio-chart-1" className='humio-chart-1 splash-humio__chart'>
        <Chart />
        <div className="splash-humio__chart-bottom">
          <div className="splash-humio__chart-title">Real-Time Analysis</div>
          <div className="splash-humio__chart-timespan">(Past 5m)</div>
        </div>
      </div>
    );

    const chart2 = (
      <div key="humio-chart-2" className='humio-chart-2 splash-humio__chart'>
        <div className="splash-humio__value">{ingestionRate}<div className="splash-humio__superscript">MB/s</div></div>
        <div className="splash-humio__chart-bottom">
          <div className="splash-humio__chart-title">High Ingestion Rates</div>
          <div className="splash-humio__chart-timespan">(1.2 TB/day per node)</div>
        </div>
      </div>
    );

    const chart3 = (
      <div key="humio-chart-3" className='humio-chart-3 splash-humio__chart'>
        <div className="splash-humio__compress-outline">
          <div className="splash-humio__compress"></div>
        </div>
        <div className="splash-humio__chart-bottom">
          <div className="splash-humio__chart-title">High Compression</div>
          <div className="splash-humio__chart-timespan">(Current Ratio: {compressionRatio}%)</div>
        </div>
      </div>
    );

    return (
      <div {...splash()}>
        <div {...splash("demo")}>
          <div className="splash-humio">
            <img className="splash-humio__logo" alt="Humio" src={require("../images/logos/humio_logo.svg")} />
            <div className="splash-humio__charts">
              {chart1} {chart2} {chart3}
            </div>
          </div>
          <div {...splash("line-shadow")}></div>
        </div>
        <div {...splash("line")}></div>
        <div {...splash("content")}>
          <h1 {...splash("title")}>LOG AGGREGATION & DATA MANAGEMENT</h1>
          <div {...splash("description")}>
            Use your data as a strategic asset, get real-time insight
            into your business.
          </div>
          <div>
            <a href="#" {...splash("call-to-action")}>Read More</a>
            <a href="https://go.humio.com/" {...splash("call-to-action")}>Free 60GB Trial</a>
          </div>
        </div>
      </div>
    );
  }
});
