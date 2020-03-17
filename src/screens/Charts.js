// Loading.js
import React from 'react'
import { Dimensions, ScrollView, View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-chart-kit';

import { db } from '../config';
import { Button } from 'native-base';

let fiveRef = db.ref('/runs/20');
let itemsRef = db.ref('/runs/10');

export default class Charts extends React.Component {
  
  state = {
    items1: [],
    total1: [],
    items2: [],
    total2: [],
    items3: [],
    total3: [],
    itemsRef1: '/runs/5',
    itemsRef2: '/runs/10',
    itemsRef3: '/runs/20',
  };

  UNSAFE_componentWillMount() {
    db.ref(this.state.itemsRef1).on('value', snapshot => {
      let data = snapshot.val();
      let items1 = Object.values(data);
      this.setState({ items: items1 });

      var i = 0;
      var total1 = [];
      for (i = 0; i < items1.length; i++)
      {
        parseInt(items1[i].name)
        total1[i] = ''
        total1[i] += items1[i].name
      }
      
      this.setState({total1})
    });

    db.ref(this.state.itemsRef2).on('value', snapshot => {
      let data = snapshot.val();
      let items2 = Object.values(data);
      this.setState({ items: items2 });

      var i = 0;
      var total2 = [];
      for (i = 0; i < items2.length; i++)
      {
        parseInt(items2[i].name)
        total2[i] = ''
        total2[i] += items2[i].name
      }
      
      this.setState({total2})
    });

    db.ref(this.state.itemsRef3).on('value', snapshot => {
      let data = snapshot.val();
      let items3 = Object.values(data);
      this.setState({ items: items3 });

      var i = 0;
      var total3 = [];
      for (i = 0; i < items3.length; i++)
      {
        parseInt(items3[i].name)
        total3[i] = ''
        total3[i] += items3[i].name
      }
      
      this.setState({total3})
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
    array = this.state.total1
    //console.log(array)
    length = this.state.total1.length
    hello = [0]
    let j1 = 0;

    for (let i = 1; i < 6; i++)
    {
      singleInt = parseInt(array[length-i])
        
      if (!(isNaN(singleInt)))
      {
        console.log(singleInt + " ----- " + j1)
        hello[j1] = singleInt
        j1++
      }
      
    }

    singleInt2 = 0
    array2 = this.state.total2
    //console.log("2 - " + array2)
    length2 = this.state.total2.length
    hello2 = [0]
    let j2 = 0

    for (let i = 1; i < 6; i++)
    {
      singleInt = parseInt(array2[length2-i])
        
      if (!(isNaN(singleInt)))
      {
        console.log(singleInt + " ----- " + j2)
        hello2[j2] = singleInt
        j2++
      }
      

    }

    singleInt3 = 0
    array3 = this.state.total3
    //console.log("3 - " + array3)
    length3 = this.state.total3.length
    hello3 = [0]
    let j3 = 0

    for (let i = 1; i < 6; i++)
    {
        
        singleInt = parseInt(array3[length3-i])
        
        if (!(isNaN(singleInt)))
        {
          console.log(singleInt + " ----- " + j3)
          hello3[j3] = singleInt
          j3++
        }
        

    }

    return (
      
      <React.Fragment>
        <ScrollView>
      <View>
        
    <Text>RECENT 5K RUNS</Text>
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
    style={{
        marginVertical: 8,
        
      }}
  />
</View>

<View>
        
    <Text>RECENT 10K RUNS</Text>
  <LineChart
    data={{
      datasets: [
        {
          data: hello2
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
    
  />
</View>

<View>
        
    <Text>RECENT 20K RUNS</Text>
  <LineChart
    data={{
      datasets: [
        {
          data: hello3
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
    
  />
</View>
</ScrollView>
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