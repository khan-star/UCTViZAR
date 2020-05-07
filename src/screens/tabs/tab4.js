import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
export default class tab4 extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>                 
              <Text>
                {"\n"}
                The Medical Devices Lab is housed in the division of Biomedical Engineering of the Faculty of Health Sciences, University of Cape Town. The lab, built on the principles of FrugalBiodesignTM focuses on creating appropriate and affordable health technologies for unmet clinical needs which are very unique to developing countries. The design team from the lab is involved in multi-stake holder engagement at every step of the technology innovation process to ensure the translation of these technologies into the hands of the medical practitioners and patients. This multi-award winning lab has produced number of medical technologies such as reScribe, Laxmeter, PatRig, Open- Source Ptosis Crutches, Zibipen, Easysqueezy , FlexiGyn platform and now the UCT ViZARs.
                {"\n"}
              </Text >
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}