// Loading.js
import React from 'react'
import { Dimensions, View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-chart-kit';

import { db } from '../config';
import { Button } from 'native-base';

let fiveRef = db.ref('/runs/20');
let tenRef = db.ref('/runs/10');


export default class Loading extends React.Component {

  render() {
    return (
      <React.Fragment>
      <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    chartConfig={{
      backgroundColor: "white",
      backgroundGradientFrom: "grey",
      backgroundGradientTo: "white",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
<View>
  <Button onPress={this.printing.bind()}/>
</View>
</React.Fragment>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})