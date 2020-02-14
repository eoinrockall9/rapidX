import React, { Component } from 'react';
import { StyleSheet, Dimensions, Button, View, Text } from 'react-native';


export default class Tracker extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <MapView style={styles.mapStyle} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
