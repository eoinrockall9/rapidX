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
              <ParkRunLocation location="Borrisokane" elevation="n/a" start="9.30am" maleRecord="17.30" femaleRecord="19.49" website='https://www.parkrun.ie/borrisokanetown/'/>
              <ParkRunLocation location="Clonmel" elevation="230 ft" start="9.30am" maleRecord="17.30" femaleRecord="19.49" website='https://www.parkrun.ie/clonmel/'/>              
              <ParkRunLocation location="Knocknacree" elevation="n/a" start="9.30am" maleRecord="17.30" femaleRecord="19.49" website='https://www.parkrun.ie/knockanacreewoods/'/>
              <ParkRunLocation location="Templemore" elevation="46 ft" start="9.30am" maleRecord="17.30" femaleRecord="19.49" website='https://www.parkrun.ie/templemore/'/>
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