import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/hamstring-stretch.jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('./img/forward-leg-swing.jpg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('./img/sideway-leg-swings.png'),
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('./img/quad-stretch.png'),
  },
  {
    text: 'Card Five',
    name: 'Five',
    image: require('./img/calf-stretch.gif'),
  },
  {
    text: 'Card Six',
    name: 'Six',
    image: require('./img/glute-stretch.jpg'),
  }
];
export default class LongDistance extends Component {
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