import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Galway extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <Card  style={{height: screenHeight/4.8}}>
                <CardItem>
                  <Body>
                    <Text>
                      Oranmore
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      Elevation - 114ft
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              
              <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Leinster')} style={{height: screenHeight/4.8}}>
                  <Body>
                    <Text>
                      Leitrim
                    </Text>
                  </Body>
                </CardItem>
              </Card>
    
              <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Munster')} style={{height: screenHeight/4.8}}>
                  <Body>
                    <Text>
                      Mayo
                    </Text>
                  </Body>
                </CardItem>
              </Card>
    
              <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Ulster')} style={{height: screenHeight/4.8}}>
                  <Body>
                    <Text>
                      Roscommon
                    </Text>
                  </Body>
                </CardItem>
              </Card>
    
            </Content>
          </Container>
        );
      }
    }