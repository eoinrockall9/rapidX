// Loading.js
import React from 'react'
import { Dimensions, View, Text, ActivityIndicator, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ItemComponent from '../components/ItemComponent';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
screenHeight = Math.round(Dimensions.get('window').height);

let itemsRef = db.ref('/dates/2020/2/24');

import { db } from '../config';

export default class CalendarScreen extends React.Component {

  state = {
    items: []
  };

  setItemsRef(year, month, day) {
    dating = '/dates/' + year + '/' + month + '/' + day
    console.log(dating)
    itemsRef = db.ref(dating)
  }

  functionsCombo(year, month, day) {
    this.setItemsRef(year, month, day);
    this.props.navigation.navigate('CalendarDate', {year: year, month: month, day: day});
  }

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  renderComponent() {

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
        
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
          <Text>No items</Text>
        )}
        
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
  }
})