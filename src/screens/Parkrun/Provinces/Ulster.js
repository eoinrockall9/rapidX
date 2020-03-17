import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Ulster extends Component {
  render() {
    return (
      <Container>
        <Content>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Cavan')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Cavan</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Donegal')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Donegal</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Monaghan')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Monaghan</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}