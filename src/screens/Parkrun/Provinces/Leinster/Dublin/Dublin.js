import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { ParkRunLocation } from '../../../../../components/ParkRunLocation'

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Dublin extends Component {
    render() {
        return (
          <Container>
            <Content padder>
              <ParkRunLocation location="Ard Gillan" elevation="217 ft" start="9.30am" maleRecord="16.41" femaleRecord="19.24" website='https://www.parkrun.ie/ardgillan/'/>
              <ParkRunLocation location="Brickfields" elevation="n/a" start="9.30am" maleRecord="17.17" femaleRecord="19.13" website='https://www.parkrun.ie/brickfields/'/>
              <ParkRunLocation location="Bushy Park" elevation="53 ft" start="9.30am" maleRecord="15.52" femaleRecord="18.11" website='https://www.parkrun.ie/bushydublin/'/>
              <ParkRunLocation location="Cabinteely" elevation="272 ft" start="9.30am" maleRecord="16.26" femaleRecord="19.19" website='https://www.parkrun.ie/cabinteely/'/>              
              <ParkRunLocation location="Corkagh" elevation="n/a" start="9.30am" maleRecord="16.40" femaleRecord="18.53" website='https://www.parkrun.ie/corkagh/'/>
              <ParkRunLocation location="Darndale" elevation="n/a" start="9.30am" maleRecord="16.06" femaleRecord="20.31" website='https://www.parkrun.ie/darndale/'/>
              <ParkRunLocation location="Donabate" elevation="70 ft" start="9.30am" maleRecord="16.23" femaleRecord="18.27" website='https://www.parkrun.ie/donabate/'/>
              <ParkRunLocation location="Fairview" elevation="62 ft" start="9.30am" maleRecord="15.50" femaleRecord="19.23" website='https://www.parkrun.ie/fairview/'/>
              <ParkRunLocation location="Father Collins" elevation="34 ft" start="9.30am" maleRecord="15.36" femaleRecord="17.30" website='https://www.parkrun.ie/fathercollins/'/>
              <ParkRunLocation location="Griffeen" elevation="75 ft" start="9.30am" maleRecord="15.30" femaleRecord="18.12" website='https://www.parkrun.ie/griffeen/'/>
              <ParkRunLocation location="Hartstown" elevation="26 ft" start="9.30am" maleRecord="15.45" femaleRecord="17.43" website='https://www.parkrun.ie/hartstown/'/>              
              <ParkRunLocation location="Malahide" elevation="87 ft" start="9.30am" maleRecord="14.19" femaleRecord="17.01" website='https://www.parkrun.ie/malahide/'/>
              <ParkRunLocation location="Marlay" elevation="117 ft" start="9.30am" maleRecord="15.13" femaleRecord="16.54" website='https://www.parkrun.ie/marlay/'/>
              <ParkRunLocation location="Poolbeg" elevation="n/a" start="9.30am" maleRecord="" femaleRecord="" website='https://www.parkrun.ie/poolbeg/'/>              
              <ParkRunLocation location="Poppintree" elevation="71 ft" start="9.30am" maleRecord="16.05" femaleRecord="17.50" website='https://www.parkrun.ie/poppintree/'/>
              <ParkRunLocation location="Porterstown" elevation="113 ft" start="9.30am" maleRecord="14.57" femaleRecord="17.21" website='https://www.parkrun.ie/porterstown/'/>
              <ParkRunLocation location="River Valley" elevation="162 ft" start="9.30am" maleRecord="16.21" femaleRecord="17.56" website='https://www.parkrun.ie/rivervalley/'/>              
              <ParkRunLocation location="Shanganagh" elevation="73 ft" start="9.30am" maleRecord="15.20" femaleRecord="17.30" website='https://www.parkrun.ie/shanganagh/'/>
              <ParkRunLocation location="St. Anne's" elevation="73 ft" start="9.30am" maleRecord="14.44" femaleRecord="16.51" website='https://www.parkrun.ie/stannes/'/>
              <ParkRunLocation location="Tolka Valley" elevation="n/a" start="9.30am" maleRecord="16.41" femaleRecord="19.09" website='https://www.parkrun.ie/tolkavalley/'/>
              <ParkRunLocation location="Tyrrelstown" elevation="n/a" start="9.30am" maleRecord="16.35" femaleRecord="19.50" website='https://www.parkrun.ie/tyrrelstown/'/>
              <ParkRunLocation location="Tymon" elevation="110 ft" start="9.30am" maleRecord="15.59" femaleRecord="17.27" website='https://www.parkrun.ie/tymon/'/>
              <ParkRunLocation location="Waterstown" elevation="117 ft" start="9.30am" maleRecord="15.28" femaleRecord="18.47" website='https://www.parkrun.ie/waterstown/'/>

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