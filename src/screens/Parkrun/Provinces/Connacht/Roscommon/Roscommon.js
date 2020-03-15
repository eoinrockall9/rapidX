import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Roscommon extends Component {
    render() {
        return (
          <Container>
            <Content padder>
            <ParkRunLocation location="Castlerea" elevation="96 ft" start="9.30am" maleRecord="17.25" femaleRecord="20.39" website='https://www.parkrun.ie/castlerea/'/>
            <ParkRunLocation location="Lough Key" elevation="92 ft" start="9.30am" maleRecord="16.17" femaleRecord="19.20" website='https://www.parkrun.ie/loughkey/'/>
            <ParkRunLocation location="Strokestown" elevation="n/a" start="9.30am" maleRecord="17.56" femaleRecord="19.11" website='https://www.parkrun.ie/strokestown/'/>

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