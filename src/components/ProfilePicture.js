import React, { Component } from 'react'
import { Avatar } from 'react-native-elements';
import { View } from 'react-native';

const ProfilePicture = (props) => {
    return (
        <View style={{alignItems: 'center', paddingTop: 0, paddingBottom: 20}}>
            <Avatar rounded size="xlarge"
                source={{uri:props.imageSource,}}
            />
        </View>
    )
} 

export { ProfilePicture }
