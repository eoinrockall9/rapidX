import React, { Component } from "react";
import { StyleSheet, View, Button } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Switch } from "native-base";
import { Rating, AirbnbRating } from 'react-native-elements'
import email from 'react-native-email'
import ToggleSwitch from 'toggle-switch-react-native'

let motivationAdd = (boolean) => {
    db.ref('/motivation/').update({
      name: boolean
    });
};

let ratingPush = (rating) => {
  db.ref('/rating/').push({
    value: rating 
  });
}

let goalUpdate = (tier, goal) => {
  db.ref('/goals/' + tier + '/').add({
    value: goal
  });
}

import { db } from '../config';

export default class Settings extends Component {
  
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false
  };

  onToggle(isOn) {
    console.log("Changed to " + isOn);
    this.setState({
      isOnDefaultToggleSwitch: isOn
    })
    
  }

  handleEmail = () => {
    const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        subject: 'Show how to use',
        body: 'Some body right here'
    }).catch(console.error)
}

ratingCompleted(rating) {
  console.log("Rating is: " + rating)
  ratingPush(rating)
}

pushToggleFalse = () => {
  motivationAdd(false);  
}

pushToggleTrue = () => {
  motivationAdd(true)
}

monthEasy = () => {
    
}

monthMiddle = () => {
  
}

monthHard = () => {
  
}

yearEasy = () => {
  
}

yearMedium = () => {
  
}

yearHard = () => {
  
}
  
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>About</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  rapidX is a fitness application with specific emphasis on running. Allows users to easily track progress through use of charts and statistics.{"\n"}
                  It was created as part of a Final Year Project for a student in Computer Science in NUI Galway.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Features</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Goals</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Button title="Turn On" onPress={this.monthEasy} />
                <Button title="Turn Off" onPress={this.pushToggleFalse} />
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Motivational Quote on Home Page</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Button title="Turn On" onPress={this.pushToggleTrue} />
                <Button title="Turn Off" onPress={this.pushToggleFalse} />
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Rating</Text>
            </CardItem>
            <CardItem bordered style={styles.rating}>
              <Body>
                <AirbnbRating 
                count={5}
                reviews={["Terrible", "The Bad", "Good", "Great", "Elite"]}
                defaultRating={3}
                size={20}
                style={styles.rating}
                onFinishRating={this.ratingCompleted}
                />
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Feedback</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <View style={styles.container}>
                <Button title="Send Mail" onPress={this.handleEmail} />
              </View>
              </Body>
            </CardItem>
          
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    rating: {
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  }
});