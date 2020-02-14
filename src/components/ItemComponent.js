import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base'

screenWidth = Math.round(Dimensions.get('window').width);
buttonWidth = 75;
textboxWidth = screenWidth - buttonWidth;

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index} style={styles.itemRow}>
              <Text style={styles.itemtext}>{item.name}</Text>
              <Button danger style={styles.deleteButton}></Button>
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
    
  },
  deleteButton: {
    width: buttonWidth,
    justifyContent: 'flex-end'
  }
});