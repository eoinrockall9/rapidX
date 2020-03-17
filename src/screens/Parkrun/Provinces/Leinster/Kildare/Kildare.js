import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Kildare extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Castletown, Celbridge" elevation="74 ft" start="9.30am" maleRecord="15.59" femaleRecord="19.19" website='https://www.parkrun.ie/castletown/'/>
              <ParkRunLocation location="Kilcock" elevation="n/a" start="9.30am" maleRecord="16.22" femaleRecord="18.08" website='https://www.parkrun.ie/royalcanalkilcock/'/>              
              <ParkRunLocation location="Naas" elevation="47 ft" start="9.30am" maleRecord="15.28" femaleRecord="18.11" website='https://www.parkrun.ie/naas/'/>
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