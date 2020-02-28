import React, { Component } from "react";
import { StyleSheet, View, Button } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { Rating, AirbnbRating } from 'react-native-elements'
import email from 'react-native-email'


export default class CardItemBordered extends Component {
  
  handleEmail = () => {
    const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        bcc: 'mee@mee.com', // string or array of email addresses
        subject: 'Show how to use',
        body: 'Some body right here'
    }).catch(console.error)
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