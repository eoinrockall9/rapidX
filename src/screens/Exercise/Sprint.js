import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
  },
  {
    text: 'Card Two',
    name: 'Two',
  },
  {
    text: 'Card Three',
    name: 'Three',
  },
  {
    text: 'Card Four',
    name: 'Four',
  },
  {
    text: 'Card Five',
    name: 'Five',
  },
  {
    text: 'Card Six',
    name: 'Six',
  }
];
export default class Sprint extends Component {
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