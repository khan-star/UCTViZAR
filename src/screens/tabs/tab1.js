import React, { Component } from 'react';
import { Image } from 'react-native';
import homeimage from '../assets/images/homeimage.jpg';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
export default class tab1 extends Component {
  render() {
    return (
      <Container>
        <Content>   
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Image source={ homeimage } />                            
              <Text>
                {"\n"}
                The UCT ViZARs are specialized disposable face shields made with a user-centric design approach. The profile foam design of UCT ViZARs enables the users to wear these visors for longer periods, providing the much-needed comfort and safety for the PPE end-users.
              </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}