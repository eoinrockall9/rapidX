import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Wicklow extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Avondale" elevation="n/a" start="9.30am" maleRecord="16.06" femaleRecord="18.07" website='https://www.parkrun.ie/avondaleforest/'/>
              <ParkRunLocation location="Russborough" elevation="n/a" start="9.30am" maleRecord="17.08" femaleRecord="19.45" website='https://www.parkrun.ie/russborough/'/>              
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