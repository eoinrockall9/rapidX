import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base'
import ItemComponent from '../components/ItemComponent';
import PropTypes from 'prop-types';

import { db } from '../config';

let itemsRef = db.ref('/runs/10');

export default class RecentRuns extends Component {
  state = {
    items: [],
    items2: [],
    string: ''
    
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      //console.log("Snap" + JSON.stringify(snapshot.val()));
      let i = 0
      let items = []

      snapshot.forEach((subSnapshot) => {
        // var key = Object.keys(snapshot.val())[index]
        //console.log("Subsnap" + JSON.stringify(subSnapshot.val()))
        let data = subSnapshot.val()
        let oneItems = Object.values(data);
        items.push(oneItems)

      });
      this.setState({items : items})
  
    });
  }

  render() {

    // let recent = Object.keys(this.state.items)
    //console.log(JSON.stringify(this.state.items[1]))
    // for (let i = 0; i < this.state.items.length; i++)
    // {
      return (
      <View>
        <Text>Hello</Text>
        <Text>{this.state.items[0]}</Text>
        <Text>{this.state.items[1]}</Text>
        <Text>{this.state.items[2]}</Text>
        <Text>{this.state.items[3]}</Text>
        <Text>{this.state.items[4]}</Text>
      </View>
      
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