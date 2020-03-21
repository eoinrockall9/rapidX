import React, { Component } from 'react';
import { View, ScrollView } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Text, Card, CardItem, Body, Button } from 'native-base';
import { ProgressChart, BarChart } from 'react-native-chart-kit';

import { db } from '../config';

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

console.log(date + " ----- " + month + " ----- " + year);

let default_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December']

export default class Stats extends Component {

  state = {
    items: [],
    monthRef: '/dates/' + year + '/' + month + '/distance',
    yearRef: 'dates/' + year + '/distance',
    monthDistance: 0,
    yearDistance: 0, 
    barChart: [],
    months: []
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

        if(!(isNaN(numb)))
        {
          runningTotal = runningTotal + numb;
        }

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

        if(!(isNaN(numb)))
        {
          yearTotal = yearTotal + numb;
        }
        
        console.log("Year: " + yearTotal)

        itemsYr.push(oneItems)
      

      });

      this.setState({ yearDistance: yearTotal});
  
    });

    let barChart = [];

      for(let iter=month; iter>0; iter--)
      {
        db.ref('/dates/' + year + '/' + iter + '/distance').on('value', snapshot => {
          //console.log("Snap" + JSON.stringify(snapshot.val()));
    
          let runningTotal = 0;

          snapshot.forEach((subSnapshot) => {
            // var key = Object.keys(snapshot.val())[index]
            //console.log("Subsnap" + JSON.stringify(subSnapshot.val()))
            let data = subSnapshot.val()
            let oneItems = Object.values(data);
    
            let numb = parseInt(oneItems);
            console.log("Number: " + numb);
    
            if(!(isNaN(numb)))
            {
              runningTotal = runningTotal + numb;
            }
    
            console.log(runningTotal)
    
            
          
    
          });
          
          console.log("Total Distance: " + iter + " : " + runningTotal)
          barChart.push(runningTotal)
          this.setState({ barChart })

          
      
        });
      }

    console.log("Bar Chart: " + barChart)

    let reverseBarChart = []
    reverseBarChart = barChart.reverse()

    console.log("Bar Chart: " + reverseBarChart)

    let months = []
    let length = 0
    length = barChart.length

    for(let i = 0; i < length; i++)
    {
      console.log(default_months[i])
      months.push(default_months[i])
    }

    this.setState({ months });
    
  }

  render() {
    return (
      <Container>
        <React.Fragment>
        <ScrollView>
        <View>
          {console.log(this.state.monthDistance + "-----" + this.state.yearDistance)}
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
                data: [(this.state.monthDistance > 100) ? 1 : this.state.monthDistance/100, 
                  (this.state.monthDistance > 500) ? 1 : this.state.monthDistance/500, 
                  (this.state.monthDistance > 1000) ? 1 : this.state.monthDistance/1000 ]
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

          {/* <View style={{flexDirection: 'row'}}>
            <Button><Text>Press me</Text></Button>
            <Button><Text>Press me</Text></Button>
          </View> */}

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
              data: [(this.state.yearDistance > 100) ? 1 : this.state.yearDistance/100, 
                (this.state.yearDistance > 500) ? 1 : this.state.yearDistance/500, 
                (this.state.yearDistance > 1000) ? 1 : this.state.yearDistance/1000 ]
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
                  Distance run this year
                </Text>
              </Body>
            </CardItem>
          </Card>

          
          <BarChart
              data={{
                labels: this.state.months,
                datasets: [
                  {
                    data: this.state.barChart
                  }
                ]
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
              
          />

          </ScrollView>
          </React.Fragment>
      </Container>
    );
  }
}