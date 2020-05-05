import React, { Component } from "react";
import { View } from "react-native";
import Pdf from 'react-native-pdf';

export default class YourClass extends Component {
  constructor(props) {
    super(props);
    this.pdf = null;
  }

  render() {
    let yourPDFURI = {uri:'../assets/pdf/UCTViZAR specs_clinical (large).pdf', cache: true};

    return <View style={{flex: 1}}>
      <Pdf ref={(pdf)=>{this.pdf = pdf;}}
        source={yourPDFURI}
        style={{flex: 1}}
        onError={(error)=>{console.log(error);}} />
    </View>
  }
}