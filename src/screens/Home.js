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
                source={{uri:'https://www.pngkey.com/png/detail/202-2022332_formacin-usuario-remota-profile-icon-vector.png', }}
                onPress={() => this.props.navigation.navigate('Profile')}
            />
            <Text>Profile</Text>
            </View>
            <View style={styles.innerView}>
            <Avatar rounded size='xlarge'
                source={{uri:'https://p7.hiclipart.com/preview/115/685/301/computer-icons-checklist-icon-design-list-vector.jpg', }}
                onPress={() => this.props.navigation.navigate('List')}
            />
            <Text>To-Do List</Text>
            </View>
            </React.Fragment>
        </View>

        <View style={styles.icons}>
          <React.Fragment>
            <Avatar rounded size='xlarge'
                source={{uri:'https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg', }}
                onPress={() => this.props.navigation.navigate('CalendarScreen')}
            />
            <Avatar rounded size='xlarge'
                source={{uri:'https://cdn3.vectorstock.com/i/1000x1000/50/72/black-bar-chart-icon-on-white-background-vector-13695072.jpg', }}
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
                source={{uri:'https://library.kissclipart.com/20180902/ule/kissclipart-sport-transparent-icon-clipart-computer-icons-runn-06e90f9f46749e50.jpg', }}
                onPress={() => this.props.navigation.navigate('Exercises')}
            />
            <Avatar rounded size='xlarge'
                source={{uri:'https://image.shutterstock.com/image-vector/distance-icon-illustration-isolated-vector-260nw-563106409.jpg', }}
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
                source={{uri:'https://icons-for-free.com/iconfiles/png/512/edit+gear+options+preferences+setting+settings+icon-1320166551296108865.png', }}
                onPress={() => this.props.navigation.navigate('Settings')}
            />
            <Avatar rounded size='large'
                source={{uri:'https://static.thenounproject.com/png/108494-200.png', }}
                onPress={() => this.props.navigation.navigate('Stats')}
            />
            <Avatar rounded size='large'
                source={{uri:'https://vectorified.com/images/quote-icon-png-16.png', }}
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