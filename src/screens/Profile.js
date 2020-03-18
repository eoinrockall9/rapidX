import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Card, CardItem, Body, Text, Button } from 'native-base'
import ItemComponent from '../components/ItemComponent';
import { Image } from 'react-native-elements';
import { IntroTextBox } from '../components/IntroductionTextBox';
import Dialog from 'react-native-dialog'
import { ProfileCard } from '../components/ProfileCard';

import { db } from '../config';

let itemsRef = db.ref('/profile/');

//let profileRef = db.ref('/profile');

let addItem = (item) => {
  db.ref('/profile/').update({
    username: item
  });
};

export default class Profile extends Component {

  state = {
    dialog: '',
    name: '',
    tempName: '',
    username: '',
    tempUsername: '',
    age: '',
    tempAge: ''

  };

  showDialog = (dialogValue) => {
    this.setState({ dialogVisible: true });
    this.setState({ dialog: dialogValue});
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  handleChange = e => {
    this.setState({
      tempName: e.nativeEvent.text
    });

    console.log(this.state.tempName)
  };

  handleUpdate = () => {
    this.setState({ dialogVisible: false });
    this.setState({ username: this.state.tempName})
    addItem(this.state.tempName)
  };

  UNSAFE_componentWillMount() {
    itemsRef.on('value', snapshot => {
      
      let items = []

      snapshot.forEach((subSnapshot) => {
        
        let data = subSnapshot.val()
        let oneItems = Object.values(data);
        items.push(oneItems)

      });
      
      console.log(items)

      this.setState({ username: items[0]});

    });
    
  }

  render() {
    return (
      <React.Fragment>
      <ScrollView >
          {/* <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://www.pngkey.com/png/detail/202-2022332_formacin-usuario-remota-profile-icon-vector.png', }}
              style={{ width: 200, height: 200 }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View> */}


          <View style={styles.textContainer}>
          

          
          <Card transparent>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>Username:</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  {this.state.username}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button>
              <Button danger style={styles.updateButton} onPress={() => this.showDialog("Username")}>
                <Text>Update</Text>
              </Button>
            </CardItem>
            
          </Card>



          
                           
            

          <Dialog.Container visible={this.state.dialogVisible}>
              <Dialog.Title>Update your {this.state.dialog}</Dialog.Title>
              
              <Dialog.Input autoCapitalize="none" style={styles.input} onChange={this.handleChange}/>
              <Dialog.Button label="Update" onPress={this.handleUpdate} />
              <Dialog.Button label="Cancel" onPress={this.handleCancel} />
            </Dialog.Container>

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
    backgroundColor: 'white'
  },
  updateButton: {
    height: 35,
    position: 'absolute', 
    right: 10,
  }

});