import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Galway extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Limerick" elevation="n/a" start="9.30am" maleRecord="16.01" femaleRecord="18.57" website='https://www.parkrun.ie/limerick/'/>
              <ParkRunLocation location="Mungret" elevation="n/a" start="9.30am" maleRecord="15.58" femaleRecord="18.47" website='https://www.parkrun.ie/mungret/'/>              
              <ParkRunLocation location="Newcastle West" elevation="n/a" start="9.30am" maleRecord="17.31" femaleRecord="20.00" website='https://www.parkrun.ie/newcastlewest/'/>
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