import React, { Component } from 'react';
import { Button, View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { WeatherWidget } from '../components/WeatherWidget'
import { Footer } from 'native-base';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

import { db } from '../config';

export default class Home extends Component {

  state = {
    motivationRef: '/motivation/',
    usernameRef: '/profile/',
    welcomeRef: '/usernameAppear/',
    items: [],
    motivationBool: '',
    username: '',
    usernameBool: ''   
  }

  

  componentDidMount() {
    
    db.ref(this.state.welcomeRef).on('value', snapshot => {
      let items = []

      snapshot.forEach((subSnapshot) => {

        let data = subSnapshot.val();
        console.log(data);
        
        items.push(data);
        this.usernameBool = data;
        console.log("Welcome: " + this.usernameBool)

      });

      this.setState({ usernameBool: items[0] })
      length = items.length
      console.log(items)

    });

    db.ref(this.state.motivationRef).on('value', snapshot => {
      let items = []

      snapshot.forEach((subSnapshot) => {

        let data = subSnapshot.val();
        console.log(data);
        
        items.push(data);
        this.motivationBool = data;
        console.log("Motivation: " + this.motivationBool)

      });

      this.setState({ motivationBool: items[0] })
      length = items.length
      console.log(items)

    });


    db.ref(this.state.usernameRef).on('value', snapshot => {
      let items = []

      snapshot.forEach((subSnapshot) => {

        let data = subSnapshot.val();
        console.log(data);
        
        items.push(data);
        this.username = data;
        console.log("Motivation: " + this.username)

      });

      this.setState({ username: this.username })
      length = items.length
      

    });
  }

  render() {
    return (
      <React.Fragment>
      <WeatherWidget
        api={"2832148a54f9bbae57eaa4ff32350ee9"}
        lat={"53.268810"}
        lng={"-8.929030"}
      />

      <ScrollView>

      <View style={{height: this.state.usernameBool ? screenHeight/13 : 0 }}>
        <Text style={styles.welcomeText}>Hello {this.state.username}</Text>
        <Text style={styles.welcomeText}>Welcome to rapidX</Text>
      </View>

        <View style={styles.icons}>
          <React.Fragment>
            <View style={styles.innerView}>
            <Avatar rounded size='xlarge'
                source={require('../Pictures/parkrun.jpg')}
                onPress={() => this.props.navigation.navigate('Provinces')}
            />
            <Text>Park Run</Text>
            </View>
            <View style={styles.innerView}>
            <Avatar rounded size='xlarge'
                source={require('../Pictures/listitems.png')}
                onPress={() => this.props.navigation.navigate('List')}
            />
            <Text>To-Do List</Text>
            </View>
            </React.Fragment>
        </View>

        <View style={styles.icons}>
          <React.Fragment>
            <Avatar rounded size='xlarge'
                source={require('../Pictures/calendar.png')}
                onPress={() => this.props.navigation.navigate('CalendarScreen')}
            />
            <Avatar rounded size='xlarge'
                source={require('../Pictures/charts.png')}
                onPress={() => this.props.navigation.navigate('Charts')}
            />
            </React.Fragment>
        </View>
        <View style={styles.captions2}>
          <React.Fragment>
            <Text>Calendar</Text>
            <Text>Charts</Text>
          </React.Fragment>
        </View>

        <View style={styles.icons}>
          <React.Fragment>
            <Avatar rounded size='xlarge'
                source={require('../Pictures/exercises.png')}
                onPress={() => this.props.navigation.navigate('AddItem')}
            />
            <Avatar rounded size='xlarge'
                source={require('../Pictures/tracker.png')}
                onPress={() => this.props.navigation.navigate('Tracker')}
            />
            </React.Fragment>
        </View>
        <View style={styles.captions2}>
          <React.Fragment>
            <Text>Exercises</Text>
            <Text>Run Tracker</Text>
          </React.Fragment>
        </View>

        <View style={styles.icons}>
          <React.Fragment>
            <Avatar rounded size='large'
                source={require('../Pictures/settings.png')}
                onPress={() => this.props.navigation.navigate('Settings')}
            />
            <Avatar rounded size='large'
                source={require('../Pictures/stats.png')}
                onPress={() => this.props.navigation.navigate('Stats')}
            />
            <Avatar rounded size='large'
                source={require('../Pictures/recentruns.png')}
                onPress={() => this.props.navigation.navigate('RecentRuns')}
            />
            </React.Fragment>
        </View>
        <View style={styles.captions3}>
          <React.Fragment>
            <Text>Settings</Text>
            <Text>           Statistics</Text>
            <Text>   Recent Runs</Text>
          </React.Fragment>
        </View>

      </ScrollView>

      <Footer style={{height: this.state.motivationBool ? screenHeight/15 : 0 }}>
        <Text>{randomItem}</Text>
      </Footer>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create ({
  icons: {
    paddingTop: screenHeight/50, 
    paddingBottom: 5, 
    flexDirection:'row', 
    justifyContent:'space-evenly'
  },
  captions1: {
    paddingBottom: 20, 
    flexDirection:'row', 
    justifyContent:'space-evenly'
  },
  captions2: {
    paddingBottom: 20, 
    flexDirection:'row', 
    justifyContent:'space-evenly'
  },
  captions3: {
    paddingBottom: 20, 
    flexDirection:'row', 
    justifyContent:'space-evenly'
  },
  innerView: {
    flexDirection: 'column',
    
  },
  welcomeText: {
    textAlign: 'center',
    paddingTop: 10
  }
});