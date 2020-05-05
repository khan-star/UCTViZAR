import React, { Component } from 'react';
import { Image } from 'react-native';
import license from '../assets/images/License.jpg';
import { Container, Content, Card, CardItem, Text, Body, Title } from 'native-base';
export default class CardShowcaseExample extends Component {
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
          </Card>
        </Content>
      </Container>
    );
  }
}