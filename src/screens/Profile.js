import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Card, CardItem, Body } from 'native-base'
import ItemComponent from '../components/ItemComponent';
import { Image } from 'react-native-elements';
import { IntroTextBox } from '../components/IntroductionTextBox';

import { db } from '../config';


export default class Settings extends Component {

  render() {
    return (
      <React.Fragment>
      <ScrollView >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://www.pngkey.com/png/detail/202-2022332_formacin-usuario-remota-profile-icon-vector.png', }}
              style={{ width: 200, height: 200 }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.textContainer}>
            
            <IntroTextBox message="Name"></IntroTextBox>
            <IntroTextBox message="Birthplace"></IntroTextBox>
            <IntroTextBox message="Age"></IntroTextBox>
          </View>
          

        
      </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    alignItems: 'center'
  },
  textContainer: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: '#bfbfbf'
  },

});