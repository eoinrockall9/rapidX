// Loading.js
import React from 'react'
import { Dimensions, View, ActivityIndicator, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

// import firebase from 'react-native-firebase';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

export default class Exercies extends React.Component {
  

  render() {
    return (
      <React.Fragment>
      <Content>
          <Card style={styles.card}>
            <CardItem style={{backgroundColor: 'white'}}>
              <Body>
                <Text style={styles.cardHeader}>
                   WARM-UP
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('DynamicStretch')} style={{backgroundColor: '#1589FF'}}>
              <Body>
                <Text style={styles.cardItem}>
                   Dynamic Stretching
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('Warmup')} style={{backgroundColor: 'blue'}}>
              <Body>
                <Text style={styles.cardItem}>
                   Warmup Exercises
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={{backgroundColor: 'white'}}>
              <Body>
                <Text style={styles.cardHeader}>
                   EXERCISES
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('Sprint')} style={{backgroundColor: '#1589FF'}}>
              <Body>
                <Text style={styles.cardItem}>
                   Sprint Training
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('LongDistance')} style={{backgroundColor: 'blue'}}>
              <Body>
                <Text style={styles.cardItem}>
                   Long Distance Training
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem style={{backgroundColor: 'white'}}>
              <Body>
                <Text style={styles.cardHeader}>
                   COOL DOWN
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('Static')} style={{backgroundColor: '#1589FF'}}>
              <Body>
                <Text style={styles.cardItem}>
                   Static Stretching
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('Foamroll')} style={{backgroundColor: 'blue'}}>
              <Body>
                <Text style={styles.cardItem}>
                   Foam Rolling
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </React.Fragment>
    )
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