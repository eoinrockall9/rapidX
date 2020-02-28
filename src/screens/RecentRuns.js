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
    string: ''
    
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val() ? snapshot.val() : {};
      let items = Object.values(data);
      //let items = {...data};
      this.setState({ items });
    });
  }

  render() {

    // let recent = Object.keys(this.state.items)
    //console.log(JSON.stringify(this.state.items[1]))
    // for (let i = 0; i < this.state.items.length; i++)
    // {
      return (
      <View>
        <Text>{(JSON.stringify(this.state.items[2]))}</Text>
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