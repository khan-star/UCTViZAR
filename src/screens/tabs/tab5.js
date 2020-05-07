import React, { Component } from 'react';
import { Image, Linking } from 'react-native';
import license from '../assets/images/License.jpg';
import { Container, Content, Card, CardItem, Text, Body, Left } from 'native-base';
export default class tab5 extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>                 
              <Text>
                {"\n"}
                This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. It is a derivative of the Corran Face Shield of 4c Engineering & Aseptium Ltd and inspired by the Bauer Medical Face Shield. See our website for more detail. Find our open source design available here in large and small
                {"\n"}
              </Text >
              <Image source={ license } style = {{height: 100, width: 300}} />
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