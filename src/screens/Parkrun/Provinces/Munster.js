import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Connacht extends Component {
    render() {
        return (
          <Container>
            <Content padder>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Clare')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Clare</Text>
                    </Body>
                </CardItem>
            </Card>
              
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Cork')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Cork</Text>
                    </Body>
                </CardItem>
            </Card>
    
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Kerry')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Kerry</Text>
                    </Body>
                </CardItem>
            </Card>

            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Limerick')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Limerick</Text>
                    </Body>
                </CardItem>
            </Card>
    
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Tipperary')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Tipperary</Text>
                    </Body>
                </CardItem>
            </Card>

            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Waterford')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Waterford</Text>
                    </Body>
                </CardItem>
            </Card>
    
            </Content>
          </Container>
        );
      }
    }