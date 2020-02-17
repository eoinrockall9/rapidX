// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

// import firebase from 'react-native-firebase';

export default class Sprint extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <Text>WELCOME TO</Text>
        <ActivityIndicator size='small' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})