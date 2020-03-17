import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Carlow extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Carlow Town" elevation="n/a" start="9.30am" maleRecord="16.27" femaleRecord="19.18" website='https://www.parkrun.ie/carlowtown/'/>
              <ParkRunLocation location="Tullow" elevation="91 ft" start="9.30am" maleRecord="16.14" femaleRecord="19.52" website='https://www.parkrun.ie/tullow/'/>              
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