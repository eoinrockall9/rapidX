// Loading.js
import React from 'react'
import { Dimensions, View, Text, ActivityIndicator, StyleSheet, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import { Button } from 'native-base'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Dialog from 'react-native-dialog'
import ItemComponent from '../components/ItemComponent';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
screenHeight = Math.round(Dimensions.get('window').height);

import { db } from '../config';

let addItem = (item, year, month, day) => {
  db.ref('/dates/' + year + '/' + month + '/' + day).push({
    name: item
  });
};

export default class CalendarScreen extends React.Component {

  state = {
    items: [],
    itemsRef: '/dates/' + yyyy + '/' + mm + '/' + dd,
    dialogVisible: false,
    message: '',
    day: '',
    month: '',
    year: ''
  };

  handleMessage = e => {
    this.setState({
      message: e.nativeEvent.text
    });
  };

  handleDay = e => {
    this.setState({
      day: e.nativeEvent.text
    });
  };

  handleMonth = e => {
    this.setState({
      month: e.nativeEvent.text
    });
  };

  handleYear = e => {
    this.setState({
      year: e.nativeEvent.text
    });
  };

  functionsCombo(year, month, day) {
    
    this.setState({itemsRef: '/dates/' + year + '/' + month + '/' + day})
    console.log("Items Ref: " + this.state.itemsRef)
    this.componentDidMount();
  } 

  handleSubmit = () => {
    addItem(this.state.message, this.state.year, this.state.month, this.state.day);
  }

  calendarAdd = () => {
    this.handleSubmit();
    this.setState({ dialogVisible: false });
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  componentDidMount() {
    db.ref(this.state.itemsRef).on('value', snapshot => {
      //console.log("Snap" + JSON.stringify(snapshot.val()));
      let i = 0
      let items = []

      snapshot.forEach((subSnapshot) => {
        // var key = Object.keys(snapshot.val())[index]
        //console.log("Subsnap" + JSON.stringify(subSnapshot.val()))
        let data = subSnapshot.val()
        let oneItems = Object.values(data);
        items.push(oneItems)

      });
      this.setState({items : items})
  
    });
  }

  render() {

    return (
      <React.Fragment>
      <View style={{height: (screenHeight/2.15)}}>
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={6}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={12}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          // Initially visible month. Default = Date()

          current={today}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => this.functionsCombo(day.year, day.month, day.day)}
          // Handler which gets executed on day long press. Default = undefined
          //onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM, yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          firstDay={1}
        />
      </View>

      <View style={styles.container}>
        
       <ScrollView>
        <Text>{this.state.items[0]}</Text>
        <Text>{this.state.items[1]}</Text>
        <Text>{this.state.items[2]}</Text>
        <Text>{this.state.items[3]}</Text>
        <Text>{this.state.items[4]}</Text>
      </ScrollView>
        <Button full style={styles.addButton} onPress={this.showDialog}>
          <Text style={styles.addButtonText}>Add to your Calendar</Text>
        </Button>


        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Add to your Calendar</Dialog.Title>
          <Dialog.Description>
            Add in a date to add this to your calendar?
          </Dialog.Description>
          <Dialog.Input label="Item" onChange={this.handleMessage} style={styles.input}/>
          <Dialog.Input label="Day" onChange={this.handleDay} style={styles.input}/>
          <Dialog.Input label="Month" onChange={this.handleMonth} style={styles.input}/>
          <Dialog.Input label="Year" onChange={this.handleYear} style={styles.input}/>
          
          <Dialog.Button label="Add" onPress={this.calendarAdd}/>
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
        </Dialog.Container>
      </View>
      </React.Fragment>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  addButton: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  }
})