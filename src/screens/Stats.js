import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Text } from 'native-base';


export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Daily">
            <Text>Daily</Text>
          </Tab>
          <Tab heading="Weekly">
            <Text>Weekly</Text>
          </Tab>
          <Tab heading="Monthly">
            <Text>Monthly</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}