/* @flow */

import React, { PureComponent } from 'react';
import PieChart from './Pie-Chart';

export default class PieChartExample extends PureComponent {
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91]
    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0) .toString(16) + '000000') .slice(0, 7)
    const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg:{
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key:`pie-${index}`
    }))
    return (
      <PieChart style={{height: 200}}
        data={pieData}
      />

    );
  }
}
