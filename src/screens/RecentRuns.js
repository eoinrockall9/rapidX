import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base'
import ItemComponent from '../components/ItemComponent';

import { db } from '../config';

let itemsRef = db.ref('/runs/10');

export default class RecentRuns extends Component {
  state = {
    items: []
    
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });

      var i = 0;
      var string = '';
      for (i = 0; i < items.length; i++)
      {
        string += items[i].name
      }
      console.log("Fuck off - " + string)
    });
  }

  

  render() {
    return (
      <View style={styles.container}>
        
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
          <Text>No items</Text>
        )}
        
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