import React, { PureComponent } from 'react';
import AreaChart from './AreaChart';
import * as shape from 'd3-shape';

export default class AreaChartExample extends PureComponent {
  render() {
    const data = [50, 10, 40, 95, -4, 85]
    return (
      <AreaChart style = {{ height: 200,}}
        data = {data}
        contentInsert = {{top: 30, bottom: 30}}
        curve = {shape.curveNatural}
        svg = {{fill: 'rgba(134, 65, 244, 0.8)'}}
        >

      </AreaChart>
    );
  }
}
