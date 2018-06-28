import React, { Component } from 'react';
import PieChartExample from './src/components/PieChartExample';
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
        <PieChartExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
