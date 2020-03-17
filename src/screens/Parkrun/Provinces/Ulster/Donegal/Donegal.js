import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Donegal extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Buncrana" elevation="n/a" start="9.30am" maleRecord="16.20" femaleRecord="18.32" website='https://www.parkrun.ie/buncrana/'/>
              <ParkRunLocation location="Dungloe" elevation="61 ft" start="9.30am" maleRecord="16.36" femaleRecord="18.06" website='https://www.parkrun.ie/dungloe/'/>              
              <ParkRunLocation location="Falcarragh" elevation="167 ft" start="9.30am" maleRecord="16.50" femaleRecord="18.20" website='https://www.parkrun.ie/falcarragh/'/>
              <ParkRunLocation location="Letterkenny" elevation="203 ft" start="9.30am" maleRecord="17.05" femaleRecord="17.33" website='https://www.parkrun.ie/letterkenny/'/>
              <ParkRunLocation location="Narin Beach" elevation="n/a" start="9.30am" maleRecord="17.50" femaleRecord="19.47" website='https://www.parkrun.ie/narinbeach/'/>                          
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