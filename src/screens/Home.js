import React, { Component } from 'react';
import { Button, View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.icons}>
          <React.Fragment>
            <Avatar rounded size='xlarge'
                source={{uri:'https://www.pngkey.com/png/detail/202-2022332_formacin-usuario-remota-profile-icon-vector.png', }}
                onPress={() => this.props.navigation.navigate('Profile')}
            />
            </React.Fragment>
        </View>
        <View style={styles.captions}>
          <React.Fragment>
            <Text>Profile</Text>
          </React.Fragment>
        </View>

        <View style={styles.icons}>
          <React.Fragment>
            <Avatar rounded size='xlarge'
                source={{uri:'https://vectorified.com/images/new-item-icon-4.png', }}
                onPress={() => this.props.navigation.navigate('AddItem')}
            />
            <Avatar rounded size='xlarge'
                source={{uri:'https://p7.hiclipart.com/preview/115/685/301/computer-icons-checklist-icon-design-list-vector.jpg', }}
                onPress={() => this.props.navigation.navigate('List')}
            />
            </React.Fragment>
        </View>
        <View style={styles.captions}>
          <React.Fragment>
            <Text>Add to List</Text>
            <Text>To-Do List</Text>
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
        <View style={styles.captions}>
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
        <View style={styles.captions}>
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
                source={{uri:'https://image.shutterstock.com/image-vector/stopwatch-stop-watch-timer-flat-260nw-355549763.jpg', }}
                onPress={() => this.props.navigation.navigate('Stopwatch')}
            />
            <Avatar rounded size='large'
                source={{uri:'https://vectorified.com/images/quote-icon-png-16.png', }}
                onPress={() => this.props.navigation.navigate('Motivation')}
            />
            </React.Fragment>
        </View>
        <View style={styles.captions}>
          <React.Fragment>
            <Text>Settings</Text>
            <Text>Stopwatch</Text>
            <Text>Quote</Text>
          </React.Fragment>
        </View>

      </ScrollView>
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
  captions: {
    paddingBottom: 20, 
    flexDirection:'row', 
    justifyContent:'space-evenly'
  }
});