import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Kerry extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Inch Beach" elevation="n/a" start="9.30am" maleRecord="17.33" femaleRecord="19.47" website='https://www.parkrun.ie/inchbeach/'/>
              <ParkRunLocation location="Killarney" elevation="140 ft" start="9.30am" maleRecord="16.12" femaleRecord="18.05" website='https://www.parkrun.ie/killarney/'/>              
              <ParkRunLocation location="Listowel" elevation="176 ft" start="9.30am" maleRecord="15.53" femaleRecord="19.28" website='https://www.parkrun.ie/listowel/'/>
              <ParkRunLocation location="Tralee" elevation="54 ft" start="9.30am" maleRecord="16.07" femaleRecord="18.50" website='https://www.parkrun.ie/tralee/'/>
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