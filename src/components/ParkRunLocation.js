import React from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Content, Card, CardItem, Text, Body, Left, Right } from 'native-base'

const ParkRunLocation = (props) => {
    return(
        <Card>
        <CardItem>
          <Body style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

            <Text style={styles.locationHeader}>
              {props.location}
            </Text>

          </Body>
        </CardItem>
        <CardItem>
            <Body style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.smallText}>
                    Start Time - {props.start}
                </Text>
            
                <Text style={styles.smallText}>
                    Elevation - {props.elevation}
                </Text>
            </Body>
        </CardItem>
        <CardItem>
            <Body style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.smallText}>
                    Male Record - {props.maleRecord}
                </Text>
            
                <Text style={styles.smallText}>
                    Female Record - {props.femaleRecord}
                </Text>
            </Body>
        </CardItem>
        <CardItem>
            <Body style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text></Text>
                <Text style={{color: 'blue', fontSize: 11}} onPress={() => Linking.openURL(props.website)}>
                    For more info, check out their website
                </Text>
                <Text></Text>
            </Body>
        </CardItem>
      </Card>
    )
}

const styles = StyleSheet.create({
    locationHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        //paddingLeft: screenWidth/3.15
      },
      locationBody: {
        marginLeft: 20,
        marginRight: 20, 
        justifyContent: 'space-evenly'
      },
      smallText: {
          fontSize: 14
      }
});

export { ParkRunLocation }