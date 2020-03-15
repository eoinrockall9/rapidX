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
              <ParkRunLocation location="Tramore" elevation="40 ft" start="9.30am" maleRecord="15.40" femaleRecord="18.12" website='https://www.parkrun.ie/tramore/'/>
              <ParkRunLocation location="Waterford Nature" elevation="n/a" start="9.30am" maleRecord="16.04" femaleRecord="18.26" website='https://www.parkrun.ie/waterfordnature/'/>              
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