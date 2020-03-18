import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import { Toast } from 'native-base'

import { db } from '../config';

var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1); //January is 0!
var yyyy = today.getFullYear();
var date = dd + "/" + mm + "/" + yyyy

console.log()

let addItem = (item, distance, day, month, year) => {
  
  if (!(isNaN(item)) && !(isNaN(distance)) && !(isNaN(day)) && !(isNaN(month)) && !(isNaN(year)))
  {
    console.log("Success")

    db.ref('/runs/' + distance).push({
      name: item,
    });
  
    db.ref('/runs/anyDistance/').push({
      name: item,
      distance: distance
    });
  
    db.ref('/dates/' + year + '/distance/').push({
      distance: distance
    });
  
    db.ref('/dates/' + year + '/' + month + '/distance/').push({
      distance: distance
    });

    

  }
  

};


export default class Tracker extends Component {
  state = {
    name: '',
    distance: '',
    day: '',
    month: '',
    year: ''
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
    addItem(this.state.name, this.state.distance, this.state.day, this.state.month, this.state.year);
    this.props.navigation.navigate('Home')
  };

  functionsCombo = () => {
    this.handleSubmit();
  };

  render() {
    return (
      <React.Fragment>
      <View style={styles.congrats}>
        <Text style={styles.congratsTitle}>Congratulations{"\n"}You just completed a run</Text>
        <Text style={styles.detailsTitle}>{"\n"}Enter the details below</Text>
      </View>

      <View>
        <TextInput placeholder="Distance (in terms of KM)"style={styles.itemInput} onChange={this.handleChangeDist} />
        <TextInput placeholder="Time (in minutes)" style={styles.itemInput} onChange={this.handleChange} />
      </View>
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <TextInput placeholder="Day" style={styles.dateInput} onChange={this.handleChangeDay} />
        <TextInput placeholder="Month" style={styles.dateInput} onChange={this.handleChangeMonth} />
        <TextInput placeholder="Year" style={styles.dateInput} onChange={this.handleChangeYear} />
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
  
  congrats: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: 'white',
    fontSize: 50
  },
  congratsTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 30,
    textAlign: 'center'
  },
  detailsTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black'
  },
  dateInput: {
    height: 50,
    width: 100,
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