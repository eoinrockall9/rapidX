import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Clare extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Clarisford" elevation="65 ft" start="9.30am" maleRecord="15.46" femaleRecord="18.06" website='https://www.parkrun.ie/clarisford/'/>
              <ParkRunLocation location="Lees Road" elevation="126 ft" start="9.30am" maleRecord="15.35" femaleRecord="17.58" website='https://www.parkrun.ie/leesroad/'/>              
              <ParkRunLocation location="Vandeleur" elevation="72 ft" start="9.30am" maleRecord="17.05" femaleRecord="19.15" website='https://www.parkrun.ie/vandeleur/'/>
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