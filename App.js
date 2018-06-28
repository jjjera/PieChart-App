import React, { Component } from 'react';
//import PieChartExample from './src/components/PieChartExample';
import AreaChartExample from './src/components/AreaChartExample';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PieChart</Text>
        {/* <PieChartExample /> */}
      <AreaChartExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
