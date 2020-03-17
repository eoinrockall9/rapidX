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
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Galway')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Carlow</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Dublin')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Dublin</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Kildare')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Kildare</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Kilkenny')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Kilkenny</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Laois')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Laois</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Longford')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Longford</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Louth')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Louth</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Meath')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Meath</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Offaly')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Offaly</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Westmeath')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Westmeath</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Wexford')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Wexford</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem button onPress={() => this.props.navigation.navigate('Wicklow')} style={{height: screenHeight/4.9}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text>Wicklow</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}