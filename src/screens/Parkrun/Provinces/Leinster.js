import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Leinster extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{height: screenHeight/4.75}}>
            <CardItem onPress >
              <Body>
                <Text>
                   //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{height: screenHeight/4.75}}>
            <CardItem>
              <Body>
                <Text>
                   //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{height: screenHeight/4.75}}>
            <CardItem>
              <Body>
                <Text>
                   //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{height: screenHeight/4.75}}>
            <CardItem>
              <Body>
                <Text>
                   //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}