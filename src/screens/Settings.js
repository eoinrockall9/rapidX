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

let usernameUpdate = (boolean) => {
  db.ref('/usernameAppear/').update({
    value: boolean
  });
}

import { db } from '../config';

export default class Settings extends Component {
  
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false
  };

  handleEmail = () => {
    const to = ['e.rockall9@gmail.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        subject: 'Subject: ',
        body: ''
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

userToggleFalse = () => {
  usernameUpdate(false);  
}

userToggleTrue = () => {
  usernameUpdate(true)
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
                  rapidX is a running companion application. Allows users to easily track progress through use of charts and statistics, while also providing features for all levels of experience.{"\n"}
                  It was created as part of a Final Year Project for a student in Computer Science in NUI Galway.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Features</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{fontSize: 12}}>
                • Calendar: to plan out your days, weeks and months ahead{"\n"}
                • Charts: to track progress{"\n"}
                • Stats: Set monthly and yearly goals{"\n"}
                • Parkrun: Keep up to date with local park runs{"\n"}
                • Information: Become more educated about the sport of running
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              
            
              <Body style={{flexDirection: 'row'}}>
                <Button title="Update Username" onPress={() => this.props.navigation.navigate('Profile')} />
                
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Welcome Message on Home Page</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Button title="Turn On" onPress={this.userToggleTrue} />
                <Button title="Turn Off" onPress={this.userToggleFalse} />
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