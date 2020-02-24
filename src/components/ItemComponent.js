import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base'

import { db } from '../config';

let itemsRef = db.ref('/items');

screenWidth = Math.round(Dimensions.get('window').width);
buttonWidth = 75;
textboxWidth = screenWidth - buttonWidth;

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  handleRemove = (item) => {

    db.ref('/items/-M0qUPNnHRbZAb1R3690/').remove();
  }

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index} style={styles.itemRow}>
              <Text style={styles.itemtext}>{item.name}</Text>
              <Button success style={styles.deleteButton} onPress={() => this.handleRemove(item.name)}>
                <Text style={styles.doneTxt}>Done</Text>
              </Button>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
  },
  itemtext: {
    fontSize: 18,
    width: textboxWidth,
    textAlign: 'left',
    paddingLeft: 10,
    flexDirection: 'row',
    paddingTop: 10
  },
  itemRow: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10,
    
  },
  deleteButton: {
    width: buttonWidth,
    justifyContent: 'flex-end'
  },
  doneTxt: {
    color: 'white',
    textAlignVertical: 'center',
    //justifyContent: 'space-evenly'
    
  }
});