import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
  {
    text: 'Calf',
    name: 'One',
    image: require('./img/foamroll/calf.png'),
  },
  {
    text: 'Hamstring',
    name: 'Two',
    image: require('./img/foamroll/hamstring.png'),
  },
  {
    text: 'Adductor',
    name: 'Three',
    image: require('./img/foamroll/adductor.png'),
  },
  {
    text: 'Quad',
    name: 'Four',
    image: require('./img/foamroll/quad.png'),
  },
  {
    text: 'Glute',
    name: 'Five',
    image: require('./img/foamroll/glute.jpeg'),
  },
  {
    text: 'IT Band',
    name: 'Six',
    image: require('./img/foamroll/itband.png'),
  }
];
export default class Foamroll extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            }
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    
                    <Body>
                      <Text>{item.text}</Text>
                      
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 400, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 0, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button onPress={() => this._deckSwiper._root.swipeLeft()}>
            
            <Text>Next</Text>
          </Button>
          
        </View>
      </Container>
    );
  }
}