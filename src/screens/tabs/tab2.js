import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text
} from 'react-native';
import { WebView } from 'react-native-webview'
import { Body, View } from 'native-base';
export default class tab2 extends React.Component {
  renderLoadingView() {
    const dimensions = Dimensions.get('window');
    const marginTop = dimensions.height/2 - 75;
    return (
      <ActivityIndicator
        animating = {true}
        color = '#0076BE'
        size = 'large'
        hidesWhenStopped={true}
        style={{marginTop}}
      />  
    );
  }
  render() {
    let uri = 'https://drive.google.com/open?id=1ds0XTAPL0gJIyNCV8-xVA0smzn97NBTs';
    if (/\.pdf$/.test(uri)) {
      uri = `https://drive.google.com/viewerng/viewer?embedded=true&url=${uri}`;
    }
    return (
      <View style={{flex: 1}}>
        <WebView
          renderLoading={this.renderLoadingView}
          source={{uri}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={false}
          scalesPageToFit={true}
        />
        <Text>The UCT ViZAR has a simple yet elegant design that comprises of a shield made of transparent sheet, a foam piece that goes against the wearer’s head and an elastic band that keeps the design in place. Care has been taken to ensure that the chosen materials are widely available and that the manufacturing process is simplified to ensure that our ViZARs can be easily assembled in less than 5 minutes and requires no specialist skills.</Text>
      </View>
    );
  }
}