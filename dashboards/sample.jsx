'use strict';

var React = require('react');
var Dashboard = require('tiler').Dashboard;
var NumberTile = require('tiler-contrib-number-tile');
var ListTile = require('tiler-contrib-list-tile');
var LineChartTile = require('tiler-contrib-line-chart-tile');

var breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480};
var cols = {lg: 12, md: 10, sm: 8, xs: 4};

React.render(
  <Dashboard breakpoints={breakpoints} cols={cols} rowHeight={30}>
    <LineChartTile key={3} _grid={{x: 0, y: 0, w: 6, h: 20}}
      title={'Line Chart'}
      query={{
        metric: {label: 'name'},
        point: {time: 'time', value: {value: '$mean'}},
        from: 'examples.1',
        where: {time: {$gte: {$minus: ['$now', '5m']}}, name: {$regex: {$pattern: '^one|two|three|four$'}}},
        group: ['name'],
        aggregate: {time: {$intervals: {$size: '10s', $offset: {$minus: ['$now', '5m']}}}}
      }} />
  </Dashboard>,
  document.getElementById('content')
);
