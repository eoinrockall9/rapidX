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
              <ParkRunLocation location="Clonbur" elevation="n/a" start="9.30am" maleRecord="17.30" femaleRecord="19.49" website='https://www.parkrun.ie/clonburwoods/'/>
              <ParkRunLocation location="Coole" elevation="n/a" start="9.30am" maleRecord="16.48" femaleRecord="19.37" website='https://www.parkrun.ie/coole/'/>              
              <ParkRunLocation location="Knocknacarra" elevation="111 ft" start="9.30am" maleRecord="15.53" femaleRecord="18.13" website='https://www.parkrun.ie/knocknacarra/'/>
              <ParkRunLocation location="Oranmore" elevation="190 ft" start="9.30am" maleRecord="16.31" femaleRecord="18.55" website='https://www.parkrun.ie/oranmore/'/>
              <ParkRunLocation location="Oughterard" elevation="n/a" start="9.30am" maleRecord="16.49" femaleRecord="20.30" website='https://www.parkrun.ie/oughterard/'/>
              <ParkRunLocation location="Portumna" elevation="n/a" start="9.30am" maleRecord="16.38" femaleRecord="19.55" website='https://www.parkrun.ie/portumna/'/>
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