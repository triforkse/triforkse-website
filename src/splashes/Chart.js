var React = require('react')
var Faux = require('react-faux-dom')
var d3 = require('d3')

export default React.createClass({
  mixins: [Faux.mixins.core, Faux.mixins.anim],
  getInitialState: function () {
    return { chart: null };
  },
  render: function () {
    return <div>
      {this.state.chart}
    </div>
  },
  componentDidMount: function () {
    // This will create a faux div and store its virtual DOM
    // in state.chart
    const chart1 = this.connectFauxDOM('div', 'chart');

    const width = 90;
    const height = 90;
    const radius = Math.min(width, height) / 2;

    var svg = d3.select(chart1)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

    var arc = d3.arc()
      .innerRadius(20)
      .outerRadius(radius);

    var pie = d3.pie()
      .value(function(d) { return d.count; })
      .sort(null);

    function arcTween(a) {
      var interpolate = d3.interpolate(this._current, a);
      this._current = interpolate(0);
      return t => arc(interpolate(t));
    }

    const update = () => {

      var dataset = [
        { count: Math.random() * 70 + 10, color: "#24C082" },
        { count: 20, color: "rgb(0, 201, 156)" },
        { count: 30, color: "rgb(0, 175, 148)" },
        { count: Math.random() * 10 + 40, color: "#0b8278" }
      ];

      const path = svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => d.data.color)
        .each(function (d) { this._current = d; });

      path.transition()
        .duration(500)
        .attrTween("d", arcTween);

      this.animateFauxDOM(900);
    };

    update();
    setInterval(update, 1000);
  }

})
