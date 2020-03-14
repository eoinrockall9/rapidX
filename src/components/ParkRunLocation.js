import React from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Content, Card, CardItem, Text, Body, Left, Right } from 'native-base'

const ParkRunLocation = (props) => {
    return(
        <Card>
        <CardItem>
          <Body>
            <Text style={styles.locationHeader}>
              {props.location}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
            <Left>
                <Text>
                    Start Time - {props.start}
                </Text>
            </Left>
            <Right>
                <Text>
                    Elevation - {props.elevation}
                </Text>
            </Right>
        </CardItem>
        <CardItem>
            <Left>
                <Text>
                    Male Record - {props.maleRecord}
                </Text>
            </Left>
            <Right>
                <Text>
                    Female Record - {props.femaleRecord}
                </Text>
            </Right>
        </CardItem>
        <CardItem>
            <Body>
                <Text style={{color: 'blue'}} onPress={() => Linking.openURL(props.website)}>
                    For more info, check out their website
                </Text>
            </Body>
        </CardItem>
      </Card>
    )
}

const styles = StyleSheet.create({
    locationHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingLeft: screenWidth/3.15
      },
});

export { ParkRunLocation }