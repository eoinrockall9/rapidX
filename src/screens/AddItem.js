import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput, Picker
} from 'react-native';

import { db } from '../config';

let addItem = (item, year, month, day) => {
  db.ref('/dates/' + year + '/' + month + '/' + day).push({
    name: item
  });
};

export default class AddItem extends Component {
  state = {
    name: '',
    year: '',
    month: '',
    day: ''
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleChangeDay = e => {
    this.setState({
      day: e.nativeEvent.text
    });
  };
  handleChangeMonth = e => {
    this.setState({
      month: e.nativeEvent.text
    });
  };
  handleChangeYear = e => {
    this.setState({
      year: e.nativeEvent.text
    });
  };

  handleSubmit = () => {
    addItem(this.state.name, this.state.year, this.state.month, this.state.day);
  };

  functionsCombo = () => {
    this.handleSubmit();
    this.props.navigation.navigate('List')
  };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TextInput style={styles.itemInput} onChange={this.handleChangeYear} />
        <TextInput style={styles.itemInput} onChange={this.handleChangeMonth} />
        <TextInput style={styles.itemInput} onChange={this.handleChangeDay} />
        
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.functionsCombo}
          
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc'
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
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});