import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Content, Card, CardItem, Text, Body } from 'native-base'

const IntroTextBox = (props) => {
    return(
            <Card style={{width:props.width}}>
                <CardItem>
                    <Body>
                        <Text style={{fontWeight:props.weight}}>{props.message}</Text>
                    </Body>
                </CardItem>
            </Card>
    )
}

export { IntroTextBox }