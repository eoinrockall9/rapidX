import React, { Component } from 'react';
import { Button, View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { WeatherWidget } from '../components/WeatherWidget'
import { Footer } from 'native-base';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

import { db } from '../config';

export default class Home extends Component {

  state = {
    motivationRef: '/motivation/',
    items: [],
    motivationBool: true
  }

  

  componentDidMount() {
    db.ref(this.state.motivationRef).on('value', snapshot => {
      let items = []

      snapshot.forEach((subSnapshot) => {

        let data = subSnapshot.val();
        console.log(data);
        
        items.push(data);
        this.motivationBool = data;
        console.log("Motivation: " + this.motivationBool)

      });
      length = items.length
      console.log(items)

      

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
        {/* <View style={styles.icons}>
          <React.Fragment>
            <Avatar rounded size='xlarge'
                source={{uri:'https://www.pngkey.com/png/detail/202-2022332_formacin-usuario-remota-profile-icon-vector.png', }}
                onPress={() => this.props.navigation.navigate('Profile')}
            />
            </React.Fragment>
        </View>
        <View style={styles.captions1}>
          <React.Fragment>
            <Text>Profile</Text>
          </React.Fragment>
        </View> */}

        <View style={styles.icons}>
          <React.Fragment>
            <View style={styles.innerView}>
            <Avatar rounded size='xlarge'
                source={require('../Pictures/profilepic.png')}
                onPress={() => this.props.navigation.navigate('Profile')}
            />
            <Text>Profile</Text>
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
                onPress={() => this.props.navigation.navigate('Exercises')}
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
        <Text>Motivational Quote</Text>
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
    
  }
});