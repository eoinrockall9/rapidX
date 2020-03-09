import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Dimensions, ScrollView } from 'react-native';
import { List, ListItem, Card, CardItem, Body } from 'native-base'
import ItemComponent from '../components/ItemComponent';
import PropTypes from 'prop-types';

import { db } from '../config';

screenHeight = Math.round(Dimensions.get('window').height);

export default class RecentRuns extends Component {
  state = {
    items: [],
    string: '',
    itemsRef: '/runs/anyDistance/',
    distance: '',
    visible: true
  };

  noVisibility = () => {
    this.setState({ visible: false })
  }

  yesVisibility = () => {
    this.setState({ visible: true })
  }

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  handleDistance = e => {
    this.setState({
      distance: e.nativeEvent.text
    });
    
  };

  onUpdate = () => {
    this.setState({
      itemsRef: '/runs/' + this.state.distance
    })
    this.noVisibility();
    this.componentDidMount();
  }

  onShowAll = () => {
    this.setState({
      itemsRef: '/runs/anyDistance'
    })
    this.yesVisibility();
    this.componentDidMount();
  }

  componentDidMount() {

    console.log(this.state.itemsRef)

    db.ref(this.state.itemsRef).on('value', snapshot => {
      //console.log("Snap" + JSON.stringify(snapshot.val()));
      let i = 0
      let items = []

      snapshot.forEach((subSnapshot) => {
        // // var key = Object.keys(snapshot.val())[index]
        // //console.log("Subsnap" + JSON.stringify(subSnapshot.val()))
        // let data = subSnapshot.val()
        // let oneItems = Object.values(data);
        // items.push(oneItems)
        subSnapshot.forEach((superSubSnapshot) => {
          let data = superSubSnapshot.val()
          let oneItems = Object.values(data);
          items.push(oneItems)
        });

      });
      console.log(items)
      this.setState({items : items})
  
    });
  }

  render() {

      return (
      <React.Fragment>
        <View>
          <TextInput onChange={this.handleDistance} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} placeholder="Enter Distance"/>
          <Button title="Update" onPress={this.onUpdate}/>
          <Button title="See all runs" onPress={this.onShowAll}/>
        </View>
        <ScrollView>
        <View style={{opacity: this.state.visible ? 100 : 0, height: this.state.visible ? screenHeight : 0}}>       
          <Card style={{height: this.state.items[0] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[0]}k - {this.state.items[1]}</Text>
              </Body>
            </CardItem>
          </Card>
          
          <Card style={{height: this.state.items[2] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[2]}k - {this.state.items[3]}</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{height: this.state.items[4] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[4]}k - {this.state.items[5]}</Text>
              </Body>
            </CardItem>
          </Card>
          
          <Card style={{height: this.state.items[6] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[6]}k - {this.state.items[7]}</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{height: this.state.items[8] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[8]}k - {this.state.items[9]}</Text>
              </Body>
            </CardItem>
          </Card>
          
          <Card style={{height: this.state.items[10] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[10]}k - {this.state.items[11]}</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{height: this.state.items[12] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[12]}k - {this.state.items[13]}</Text>
              </Body>
            </CardItem>
          </Card>
          
          <Card style={{height: this.state.items[14] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[14]}k - {this.state.items[15]}</Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={{height: this.state.items[16] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[16]}k - {this.state.items[17]}</Text>
              </Body>
            </CardItem>
          </Card>
          
          <Card style={{height: this.state.items[18] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>{this.state.items[18]}k - {this.state.items[19]}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
        </ScrollView>

        <View style={{opacity: this.state.visible ? 0 : 100, height: this.state.visible ? 0 : screenHeight}}>       
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
          <Card style={{height: this.state.items[2] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>
                  {this.state.items[2]}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{height: this.state.items[3] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>
                  {this.state.items[3]}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{height: this.state.items[4] == null ? 0 : 50}}>
            <CardItem>
              <Body>
                <Text>
                  {this.state.items[4]}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </React.Fragment>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});