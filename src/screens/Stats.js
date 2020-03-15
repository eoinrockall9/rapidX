import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Text, Card, CardItem, Body } from 'native-base';

import { db } from '../config';

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

console.log(date + " ----- " + month + " ----- " + year);

export default class Stats extends Component {

  state = {
    items: [],
    itemsRef: '/dates/' + year + '/' + month + '/distance',
    totalDistance: 0
  }


  componentDidMount() {

    console.log(this.state.itemsRef)

    db.ref(this.state.itemsRef).on('value', snapshot => {
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

      this.setState({ totalDistance: runningTotal});

      this.setState({ items: items })
  
    });
  }

  functionsCombo(year, month, day) {
    
    this.setState({itemsRef: '/dates/' + year  + '/distance',})
    // console.log("Items Ref: " + this.state.itemsRef)
    this.componentDidMount();
  } 

  render() {
    return (
      <Container>
        <React.Fragment>
        <View>

        </View>

          {/* 
                Will need to probably add a button that changes from monthly to yearly
                Else just have all the stats on one page
          */}

          <Card style={{height: this.state.items[0] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>
                  {this.state.items[0]}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{height: this.state.items[1] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>
                  {this.state.items[1]}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{height: this.state.items[1] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>
                  {this.state.totalDistance}
                </Text>
              </Body>
            </CardItem>
          </Card>
          </React.Fragment>
      </Container>
    );
  }
}