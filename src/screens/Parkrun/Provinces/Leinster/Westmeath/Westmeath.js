import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Westmeath extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Athlone" elevation="169 ft" start="9.30am" maleRecord="16.15" femaleRecord="18.11" website='https://www.parkrun.ie/athlone/'/>
              <ParkRunLocation location="Mullingar" elevation="11 ft" start="9.30am" maleRecord="14.52" femaleRecord="17.46" website='https://www.parkrun.ie/mullingar/'/>              
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