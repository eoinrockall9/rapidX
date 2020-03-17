import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Monaghan extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Castleblayney" elevation="200 ft" start="9.30am" maleRecord="17.00" femaleRecord="20.14" website='https://www.parkrun.ie/castleblayney/'/>
              <ParkRunLocation location="Monaghan Town" elevation="n/a" start="9.30am" maleRecord="16.28" femaleRecord="19.49" website='https://www.parkrun.ie/monaghantown/'/>              
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