import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Wexford extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Gorey" elevation="51 ft" start="9.30am" maleRecord="16.23" femaleRecord="18.29" website='https://www.parkrun.ie/gorey/'/>
              <ParkRunLocation location="New Ross" elevation="208 ft" start="9.30am" maleRecord="15.51" femaleRecord="18.03" website='https://www.parkrun.ie/newross/'/>              
              <ParkRunLocation location="Wexford Racecourse" elevation="n/a" start="9.30am" maleRecord="14.58" femaleRecord="17.53" website='https://www.parkrun.ie/wexfordracecourse/'/>
            </Content>
          </Container>
        );
      }
    }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
      },
      card: {
        height: screenHeight/3.5
      },
      cardHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingLeft: screenWidth/2.9
      },
      cardItem: {
        paddingBottom: 30
      }
    })