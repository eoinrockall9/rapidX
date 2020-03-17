import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Meath extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Carlanstown" elevation="n/a" start="9.30am" maleRecord="17.37" femaleRecord="18.46" website='https://www.parkrun.ie/deerparkcarlanstown/'/>
              <ParkRunLocation location="Navan" elevation="102 ft" start="9.30am" maleRecord="16.47" femaleRecord="18.25" website='https://www.parkrun.ie/navan/'/>              
              <ParkRunLocation location="Oldbridge" elevation="88 ft" start="9.30am" maleRecord="15.50" femaleRecord="18.29" website='https://www.parkrun.ie/oldbridge/'/>
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