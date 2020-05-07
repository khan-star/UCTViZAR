import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Thumbnail, Text } from 'native-base';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Tab5 from './tab5';
import logo  from '../assets/images/index';
export default class TabScreen extends Component {
  render() {
    return (
      <Container style = {{backgroundColor: "#0099FF"}}>
        <Header hasTabs style= {{backgroundColor: "#0099FF"}} >
          <Left style={{flex:1}}> 
            <Thumbnail source={ logo.UCTLogo } />  
          </Left>
          <Left style={{flex:5}}> 
            <Text style={{fontFamily: "Roboto", fontSize: 25, fontWeight: "bold"}} >UCT ViZAR</Text>
          </Left>
        </Header>
        <Tabs locked={true}>
          <Tab1 tabStyle = {{backgroundColor: '#0099FF'}} activeTabStyle = {{backgroundColor: '#0099FF' }} heading="ViZARs">  
            <Tab />
          </Tab1>
          <Tab2 tabStyle = {{backgroundColor: '#0099FF'}} activeTabStyle = {{backgroundColor: '#0099FF' }} heading="Design">
            <Tab />
          </Tab2>
          <Tab3 tabStyle = {{backgroundColor: '#0099FF'}} activeTabStyle = {{backgroundColor: '#0099FF' }} heading="FAQ">
            <Tab />
          </Tab3>
          <Tab4 tabStyle = {{backgroundColor: '#0099FF'}} activeTabStyle = {{backgroundColor: '#0099FF' }} heading="About us">
            <Tab />
          </Tab4>
          <Tab5 tabStyle = {{backgroundColor: '#0099FF'}} activeTabStyle = {{backgroundColor: '#0099FF' }} heading="Licence">
            <Tab />
          </Tab5>
        </Tabs>
      </Container>
    );
  }
}