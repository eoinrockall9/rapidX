import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Mayo extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Ballina" elevation="91 ft" start="9.30am" maleRecord="16.19" femaleRecord="18.34" website='https://www.parkrun.ie/ballina/'/>
              <ParkRunLocation location="Castlebar" elevation="98 ft" start="9.30am" maleRecord="16.34" femaleRecord="17.56" website='https://www.parkrun.ie/castlebar/'/>
              <ParkRunLocation location="Claremorris" elevation="65 ft" start="9.30am" maleRecord="16.34" femaleRecord="18.30" website='https://www.parkrun.ie/claremorris/'/>
              <ParkRunLocation location="Erris" elevation="61 ft" start="9.30am" maleRecord="15.57" femaleRecord="20.03" website='https://www.parkrun.ie/erris/'/>
              <ParkRunLocation location="Westport" elevation="115 ft" start="9.30am" maleRecord="15.24" femaleRecord="16.48" website='https://www.parkrun.ie/westport/'/>
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