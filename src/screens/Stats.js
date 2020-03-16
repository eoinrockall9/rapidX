import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Text, Card, CardItem, Body } from 'native-base';
import { ProgressChart } from 'react-native-chart-kit';

import { db } from '../config';

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

console.log(date + " ----- " + month + " ----- " + year);

export default class Stats extends Component {

  state = {
    items: [],
    monthRef: '/dates/' + year + '/' + month + '/distance',
    yearRef: 'dates/' + year + '/distance',
    monthDistance: 0,
    yearDistance: 0
  }


  componentDidMount() {

    console.log(this.state.monthRef)

    db.ref(this.state.monthRef).on('value', snapshot => {
      //console.log("Snap" + JSON.stringify(snapshot.val()));
      let i = 0
      let runningTotal = 0;
      let items = []

      snapshot.forEach((subSnapshot) => {
        // var key = Object.keys(snapshot.val())[index]
        //console.log("Subsnap" + JSON.stringify(subSnapshot.val()))
        let data = subSnapshot.val()
        let oneItems = Object.values(data);

        let numb = parseInt(oneItems);
        console.log("Number: " + numb);

        runningTotal = runningTotal + numb;

        console.log(runningTotal)

        items.push(oneItems)
      

      });
      
      console.log("Total Distance: " + runningTotal)
      this.setState({ monthDistance: runningTotal});

      this.setState({ items: items })
  
    });

    db.ref(this.state.yearRef).on('value', snapshot => {
      //console.log("Snap" + JSON.stringify(snapshot.val()));
      let i = 0
      let yearTotal = 0;
      let itemsYr = []

      snapshot.forEach((subSnapshot) => {
        // var key = Object.keys(snapshot.val())[index]
        //console.log("Subsnap" + JSON.stringify(subSnapshot.val()))
        let data = subSnapshot.val()
        let oneItems = Object.values(data);

        let numb = parseInt(oneItems);
        console.log("Number: " + numb);

        yearTotal = yearTotal + numb;

        console.log("Year: " + yearTotal)

        itemsYr.push(oneItems)
      

      });
      
      console.log("Total Distance: " + yearTotal)
      this.setState({ yearDistance: yearTotal});

      //this.setState({ items: items })
  
    });
  }

  render() {
    return (
      <Container>
        <React.Fragment>
        <View>

        </View>

          <Card style={{height: this.state.monthDistance == null ? 0 : 50}}>
            <CardItem>
              <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text>
                  You have run
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                  {this.state.monthDistance}
                </Text>
                <Text>
                  km this month
                </Text>
              </Body>
            </CardItem>
          </Card>

          <ProgressChart
  data={{
    labels: ["Easy", "Medium", "Hard"], //, "Bike", "Run"], // optional
    data: [this.state.monthDistance/100, this.state.monthDistance/500, this.state.monthDistance/1000 ]
  }}
  width={screenWidth}
  height={220}
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
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
  hideLegend={false}
/>

          <Card style={{height: this.state.yearDistance == null ? 0 : 50}}>
            <CardItem>
              <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text>
                  You have run
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                  {this.state.yearDistance}
                </Text>
                <Text>
                  km this year
                </Text>
              </Body>
            </CardItem>
          </Card>

          <ProgressChart
  data={{
    labels: ["Easy", "Medium", "Hard"], //, "Bike", "Run"], // optional
    data: [this.state.yearDistance/100, this.state.yearDistance/500, this.state.yearDistance/1000 ]
  }}
  width={screenWidth}
  height={220}
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
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
  hideLegend={false}
/>

          </React.Fragment>
      </Container>
    );
  }
}