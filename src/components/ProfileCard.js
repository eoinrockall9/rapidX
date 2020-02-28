import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base'
import Dialog from 'react-native-dialog'


  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

const ProfileCard = (item, dialogVisible) => {
    return(
        <Card>
        <CardItem header button onPress={() => alert("This is Card Header")}>
          <Text>Name</Text>
        </CardItem>
        <CardItem button onPress={() => alert("This is Card Body")}>
          <Body>
            <Text>
              Click on any carditem
            </Text>
          </Body>
        </CardItem>
        <CardItem footer button onPress={() => this.showDialog}>
          <Text>GeekyAnts</Text>
        </CardItem>
        <Dialog.Container visible={dialogVisible}>
            <Dialog.Title>Add to your Calendar</Dialog.Title>
            <Dialog.Description>
                Add in a date to add this to your calendar?
            </Dialog.Description>
        <Dialog.Input label="Month" style={styles.input}/>
        <Dialog.Button label="Update" onPress={this.handleCancel} />
        <Dialog.Button label="Cancel" onPress={this.handleCancel} />
        </Dialog.Container>
      </Card>
    )
}

export { ProfileCard }

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
  },
  itemtext: {
    fontSize: 18,
    width: textboxWidth,
    textAlign: 'left',
    paddingLeft: 10,
    flexDirection: 'row',
    paddingTop: 10
  },
  itemRow: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10,
    
  },
  deleteButton: {
    width: buttonWidth,
    justifyContent: 'flex-end'
  },
  doneTxt: {
    color: 'white',
    textAlignVertical: 'center',
    //justifyContent: 'space-evenly'
    
  }
});