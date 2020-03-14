import React, { Component } from 'react';
import { Dimensions, StyleSheet, TouchableHighlight } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class CardItemButton extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Connacht')} style={{height: screenHeight/4.9}}>
              <Body style={styles.province}>
                <Text style={styles.province}>
                  CONNACHT
                </Text>
              </Body>
            </CardItem>
          </Card>
          
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Leinster')} style={{height: screenHeight/4.9}}>
              <Body style={styles.province}>
                <Text style={styles.province}>
                  LEINSTER
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Munster')} style={{height: screenHeight/4.9}}>
              <Body style={styles.province}>
                <Text style={styles.province}>
                  MUNSTER
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Ulster')} style={{height: screenHeight/4.9}}>
              <Body style={styles.province}>
                <Text style={styles.province}>
                  ULSTER
                </Text>
              </Body>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    province: {
      color: 'red', 
      textAlign: 'center',
      justifyContent: 'center',
      flex: 1,
      fontWeight: 'bold',
      paddingLeft: screenWidth/12,
      fontSize: 30, 
      fontFamily: "Verdana",
    }
});