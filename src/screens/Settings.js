import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base'
import ItemComponent from '../components/ItemComponent';

import { db } from '../config';

let itemsRef = db.ref('/runs/10');

export default class Settings extends Component {

  render() {
    return (
      <View style={styles.container}>
        
        
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