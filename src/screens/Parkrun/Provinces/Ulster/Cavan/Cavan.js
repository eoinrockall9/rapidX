import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Cavan extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Con Smith" elevation="n/a" start="9.30am" maleRecord="18.15" femaleRecord="20.30" website='https://www.parkrun.ie/consmith/'/>
              <ParkRunLocation location="Cootehill" elevation="120 ft" start="9.30am" maleRecord="16.37" femaleRecord="18.14" website='https://www.parkrun.ie/cootehill/'/>              
              <ParkRunLocation location="Deerpark Forest" elevation="n/a" start="9.30am" maleRecord="16.43" femaleRecord="20.36" website='https://www.parkrun.ie/deerparkforest/'/>
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