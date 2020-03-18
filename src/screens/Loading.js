// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Image, Dimensions } from 'react-native'
import { Button, Container, Content,  } from 'native-base'

// import firebase from 'react-native-firebase';

screenHeight = Math.round(Dimensions.get('window').height);
screenWidth = Math.round(Dimensions.get('window').width);

import { db } from '../config';

export default class Loading extends React.Component {
  
  state = {
    motivationRef: '/motivation/',
    usernameRef: '/profile/',
    welcomeRef: '/usernameAppear/',
    items: [],
    motivationBool: '',
    username: '',
    usernameBool: ''   
  }

  

  componentDidMount() {
    
    db.ref(this.state.usernameRef).on('value', snapshot => {
      let items = []

      snapshot.forEach((subSnapshot) => {

        let data = subSnapshot.val();
        console.log(data);
        
        items.push(data);
        this.username = data;
        console.log("Motivation: " + this.username)

      });

      this.setState({ username: this.username })
      length = items.length
      

    });
  }

  render() {
    return (
      <View style={styles.container}>
        
          
          <Image source={require('../Pictures/logo.png')} style={{height: screenHeight/1.2, width: screenWidth}}></Image>
            <Button dark full label="Hello" onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={{color: 'white'}}>Enter</Text>
            </Button>
       

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})