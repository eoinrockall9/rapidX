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

  

  UNSAFE_componentWillMount() {
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

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  
  render() {
    
    singleInt = 0
    array = this.state.total
    console.log(array)
    length = this.state.total.length
    hello = [0]

    for (let i = 0; i < length; i++)
    {
        
        singleInt = parseInt(array[i])
        hello[i] = singleInt
        

    }

    return (
      
      <React.Fragment>
      <View>
        
    <Text>Bezier Line Chart + {singleInt}</Text>
  <LineChart
    data={{
      datasets: [
        {
          data: hello
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
        borderRadius: 8
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
      borderRadius: 8
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