// Loading.js
import React from 'react'
import { Dimensions, View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-chart-kit';

import { db } from '../config';
import { Button } from 'native-base';

let fiveRef = db.ref('/runs/20');
let itemsRef = db.ref('/runs/10');

export default class Charts extends React.Component {

  
  state = {
    items: [],
    total: []
    
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items: items });

      var i = 0;
      var total = [];
      for (i = 0; i < items.length; i++)
      {
        parseInt(items[i].name)
        total[i] = ''
        total[i] += items[i].name
      }
      
      this.setState({total})
      
      return total;
    });
  }

  render() {

    array = []
    array = this.state.total
    single = array[0]
    
    console.log(single)
    
    return (
      
      <React.Fragment>
      <View>
        
    <Text>Bezier Line Chart + {this.state.total}</Text>
  <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: this.state.total,
        },
      ],
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    
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