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

pushToggle = () => {
    motivationAdd(this.state.isOnDefaultToggleSwitch);
    
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
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>How to use</Text>
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
              <Text>FAQs</Text>
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
              <Text>Motivational</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <ToggleSwitch
                    isOn={this.state.isOnDefaultToggleSwitch}
                    onColor='green'
                    offColor='red'
                    label='Example label'
                    labelStyle={{color: 'black', fontWeight: '900'}}
                    size='large'
                    onToggle={isOnDefaultToggleSwitch => {
                      this.setState({ isOnDefaultToggleSwitch });
                      this.onToggle(isOnDefaultToggleSwitch);
                      this.pushToggle();
                    }}
                  />
                  {console.log(this.state.isOnDefaultToggleSwitch)}
                </Text>
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
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
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