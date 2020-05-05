import React, { Component } from 'react';
import { Image } from 'react-native';
import homeimage from '../assets/images/homeimage.jpg';
import QRCODE from '../assets/images/QRCODE.jpg';
import { Container, Content, Card, Left, CardItem, Text, Body } from 'native-base';
import { Linking } from 'react-native';
export default class CardShowcaseExample extends Component {
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
            <CardItem footer bordered>
              <Text style={{flex: 0}}>Email us:</Text>
              <Left style={{flex:1}}></Left><Text style={{color: 'blue', flex: 4}} onPress={() => Linking.openURL('mailto:uctvizar@uct.ac.za')}>uctvizar@uct.ac.za</Text>
            </CardItem>
            <CardItem>
              <Left style={{flex:0}}></Left><Text style = {{color: '#3F51B5'}}>Website:</Text>
              <Left style={{flex:3}}></Left><Text style={{color: 'blue', flex: 4}} onPress={() => Linking.openURL('http://www.rci.uct.ac.za/rcips/innovation_achievements/products/UCTVizar')}>URL</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}