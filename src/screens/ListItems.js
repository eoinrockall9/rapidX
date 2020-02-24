import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { List, ListItem } from 'native-base'
import ItemComponent from '../components/ItemComponent';

import { db } from '../config';
import { ScrollView } from 'react-native-gesture-handler';

let itemsRef = db.ref('/items');

let addItem = item => {
  itemsRef.push({
    name: item
  });
};

export default class ListItems extends Component {
  state = {
    item: '',
    items: []
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };

  handleSubmit = () => {
    addItem(this.state.name);
  };

  clearText = () => {
    this.setState({
      
    });
  };

  functionsCombo = () => {
    this.handleSubmit();
    this.clearText();
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <React.Fragment>
      <ScrollView>
      <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.functionsCombo}
          
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
      
      <View style={styles.container}>
        
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
          <Text>No items</Text>
        )}
        
      </View>
      </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  }, 
  main: {
    flex: 0.3,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
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
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8, 
    borderColor: 'black'
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