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
        <Text>The simple and elegant design of UCT ViZAR comprises of a shield made of transparent sheet, a foam piece that goes against the wearer’s head and an elastic band that keeps the device in place. These materials are seemingly widely available and the design is therefore easily assembled by people with appropriate skills sets or capable of following well-designed instructions. Care has been taken to ensure that a simplified manufacturing in process is required. Our ViZARs can be assembled in less than 5mins and requires no specialist skills.</Text>
      </View>
    );
  }
}