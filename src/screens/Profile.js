import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'native-base';

trueORfalse = false;

function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable={trueORfalse}
      maxLength={40}
    />
  );
}

switchEdit = () => {
  trueORfalse = !trueORfalse
  this.restartGame.bind()
  
};

restartGame = () => {
  this.setState({ });
};

export default function UselessTextInputMultiline() {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button onPress={this.switchEdit.bind()}></Button>
    </View>
  );
}
