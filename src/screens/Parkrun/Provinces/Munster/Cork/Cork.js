import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Cork extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Ballincollig" elevation="81 ft" start="9.30am" maleRecord="15.33" femaleRecord="17.39" website='https://www.parkrun.ie/ballincollig/'/>
              <ParkRunLocation location="Bere Island" elevation="242 ft" start="9.30am" maleRecord="16.04" femaleRecord="18.36" website='https://www.parkrun.ie/bereisland/'/>              
              <ParkRunLocation location="Castlehaven" elevation="n/a" start="9.30am" maleRecord="18.26" femaleRecord="21.03" website='https://www.parkrun.ie/castlehaven/'/>
              <ParkRunLocation location="Castle Demesne" elevation="n/a" start="9.30am" maleRecord="16.47" femaleRecord="19.42" website='https://www.parkrun.ie/castledemense/'/>
              <ParkRunLocation location="Clonakility" elevation="141 ft" start="9.30am" maleRecord="16.54" femaleRecord="17.56" website='https://www.parkrun.ie/clonakilty/'/>
              <ParkRunLocation location="Glengarriff" elevation="265 ft" start="9.30am" maleRecord="15.50" femaleRecord="19.28" website='https://www.parkrun.ie/glengarriff/'/>
              <ParkRunLocation location="Glen River" elevation="n/a" start="9.30am" maleRecord="16.31" femaleRecord="18.52" website='https://www.parkrun.ie/glenriver/'/>
              <ParkRunLocation location="Mallow" elevation="n/a" start="9.30am" maleRecord="n/a" femaleRecord="n/a" website='https://www.parkrun.ie/mallowtown/'/>
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