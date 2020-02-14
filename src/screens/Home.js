import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Button
          title="Add an Item"
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Button
          title="List of Items"
          color="green"
          onPress={() => this.props.navigation.navigate('List')}
        />
        <Button
          title="Map Tracker"
          onPress={() => this.props.navigation.navigate('Tracker')}
        />
        <Button
          title="Charts"
          onPress={() => this.props.navigation.navigate('Charts')}
        />
        <Button
          title="Exercises"
          onPress={() => this.props.navigation.navigate('Exercises')}
        />
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Calendar"
          onPress={() => this.props.navigation.navigate('CalendarScreen')}
        />
        <Button
          title="Map Tracker"
          onPress={() => this.props.navigation.navigate('Tracker')}
        />

      </View>
    );
  }
}