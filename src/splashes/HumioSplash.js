import React from 'react';
import * as d3 from 'd3'
import Faux from 'react-faux-dom'
import BEM from '../BEM';

import './HumioSplash.css';

const splash = BEM("splash");

export default React.createClass({
  mixins: [
    Faux.mixins.core,
    Faux.mixins.anim
  ],

  getInitialState () {
    return {
      chart1: 'loading...',
      chart2: 'loading...',
      chart3: 'loading...',
    }
  },

  componentDidMount() {

    const update = () => {
          const chart1 = this.connectFauxDOM('div.humio-chart-1.splash-humio__chart', 'chart1');
          const chart2 = this.connectFauxDOM('div.humio-chart-2.splash-humio__chart', 'chart2');
          const chart3 = this.connectFauxDOM('div.humio-chart-3.splash-humio__chart', 'chart3');

          const data = [
            ["ERROR", 10],
            ["INFO", 30],
            ["WARN", 21],
            ["DEBUG", 4],
            ["FATAL", 1]
          ];



          var width = 90;
          var height = 90;
          var radius = Math.min(width, height) / 2;
          var color = d3.scaleOrdinal(d3.schemeCategory20b);

          var svg = d3.select(chart1)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) +
              ',' + (height / 2) + ')');

          var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

          var pie = d3.pie()
            .value(function(d) { return d.count; })
            .sort(null);

      var dataset = [
        { label: 'Abulia', count: Math.random() * 100 + 10 },
        { label: 'Betelgeuse', count: 20 },
        { label: 'Cantaloupe', count: 30 },
        { label: 'Dijkstra', count: 40 }
      ];

      svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.label));

      this.animateFauxDOM(300);
    };

    update();
    setInterval(update, 1000);
  },

  render() {
    const chartA = this.state.chart1;
    const chartB = this.state.chart2;
    const chartC = this.state.chart3;

    const chart1 = (
      <div className='humio-chart-1 splash-humio__chart'>
        {chartA}
        <div className="splash-humio__chart-title">Ingestion Rate</div>
      </div>
    );

    const chart2 = (
      <div className='humio-chart-2 splash-humio__chart'>
        {chartB}
        <div className="splash-humio__chart-title">Real-Time Analytics</div>
        <div className="splash-humio__chart-timespan">(Past 5m)</div>
      </div>
    );

    const chart3 = (
      <div className='humio-chart-3 splash-humio__chart'>
        {chartC}
        <div className="splash-humio__chart-title">High Compression</div>
        <div className="splash-humio__chart-timespan">(Past 24h)</div>
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
        </div>
      </div>
    );
  }
});
