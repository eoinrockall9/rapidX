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
              <ParkRunLocation location="Clonbur" elevation="114 ft" start="9.30am" website='http://google.com'/>
              <ParkRunLocation location="Coole" elevation="114 ft" start="9.30am" website='http://google.com'/>
              <ParkRunLocation location="Knocknacarra" elevation="114 ft" start="9.30am" website='http://google.com'/>
              <ParkRunLocation location="Oranmore" elevation="114 ft" start="9.30am" website='http://google.com'/>
              <ParkRunLocation location="Oughterard" elevation="114 ft" start="9.30am" website='http://google.com'/>
              <ParkRunLocation location="Portumna" elevation="114 ft" start="9.30am" website='http://google.com'/>
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