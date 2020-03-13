import React, { Component } from 'react';
import { Dimensions, TouchableHighlight } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class CardItemButton extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Connacht')} style={{height: screenHeight/4.8}}>
              <Body>
                <Text>
                  CONNACHT
                </Text>
              </Body>
            </CardItem>
          </Card>
          
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Leinster')} style={{height: screenHeight/4.8}}>
              <Body>
                <Text>
                  LEINSTER
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Munster')} style={{height: screenHeight/4.8}}>
              <Body>
                <Text>
                  MUNSTER
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Ulster')} style={{height: screenHeight/4.8}}>
              <Body>
                <Text>
                  ULSTER
                </Text>
              </Body>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}