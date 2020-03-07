import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { db } from '../config';

var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1); //January is 0!
var yyyy = today.getFullYear();
var date = dd + "/" + mm + "/" + yyyy

console.log()

let addItem = (item, distance) => {
  db.ref('/runs/' + distance).push({
    name: item,
  });
};

let addRun = (item, distance) => {
  db.ref('/runs/anyDistance/').push({
    name: item,
    distance: distance
  });
};

export default class Tracker extends Component {
  state = {
    name: '',
    distance: '',
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleChangeDist = e => {
    this.setState({
      distance: e.nativeEvent.text
    });
  };

  handleSubmit = () => {
    addItem(this.state.name, this.state.distance);
    addRun(this.state.name, this.state.distance);
  };

  functionsCombo = () => {
    this.handleSubmit();
  };

  render() {
    return (
      <React.Fragment>
      <View style={styles.main}>
        <Text style={styles.title}>Add Distance in terms of KM</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangeDist} />
        
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Add Time in minutes</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
      </View>
      <View>
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.functionsCombo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
      
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});