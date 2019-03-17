import React, { Component } from "react";
import { View, TouchableOpacity, Vibration } from 'react-native';

import {
  Container,
  Text,
  Icon,
  Button
} from "native-base";

import styles from './styles';

const vibrateDuration = 80;

class DialKey extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  render() {
    if (this.props.label === "Call") {
      return (
        <TouchableOpacity activeOpacity={0.2} style={styles.dialKeyCall} onPress={() => this.props.onPressCallback()}>
          <Text style={{fontSize: 35, color: '#ffffff'}}>{this.props.label}</Text>
        </TouchableOpacity>
      );
    } else if (this.props.label === "backspace") {
      return (
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.dialKeyIcon}
          onPressIn={() => this.props.onPressInCallBack()}
          onPressOut={() => this.props.onPressOutCallBack()}
          >
          <Icon type="MaterialCommunityIcons" name="backspace" style={{fontSize: 32, color: "#bfc6ea"}}/>
        </TouchableOpacity>
      );
    } else if (this.props.label === "message") {
      return (
        <TouchableOpacity activeOpacity={0.2} style={styles.dialKeyIcon} onPress={() => this.props.onPressCallback()}>
          <Icon type="MaterialCommunityIcons" name="message-text-outline" style={{fontSize: 35, color: "#D36C27"}}/>
        </TouchableOpacity>
      );
    } else if (!this.props.hasOwnProperty('label') && !this.props.hasOwnProperty('label2')) {
      return (
        <View/>
      );
    } else {
      return (
        <TouchableOpacity activeOpacity={0.2} style={styles.dialKey} onPress={() => this.props.onPressCallback(this.props.label)}>
          <Text style={{paddingLeft: 36, fontSize: 40, color: '#bfc6ea'}}>{this.props.label}</Text>
          <Text style={{paddingLeft: 10, fontSize: 12, color: '#697582'}}>{this.props.label2}</Text>
        </TouchableOpacity>
      );
    }
  }
}

class DialPad extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dialed: ""
      }

      this.intervalTimer = null;
      this.stopAutoDeleteLastDialed = this.stopAutoDeleteLastDialed.bind(this);
      this.startAutoDeleteLastDialed = this.startAutoDeleteLastDialed.bind(this);
  }

  updateDialed = (num) => {
    Vibration.vibrate(vibrateDuration);
    let dial = this.state.dialed + num;
    this.setState({
      dialed: dial
    });
  }

  deleteLastDialed = () => {
    let dial = this.state.dialed;
    if (dial) {
      dial = dial.slice(0, -1);
      this.setState({
        dialed: dial
      });
    }
  }

  startAutoDeleteLastDialed = () => {
    Vibration.vibrate(vibrateDuration);
    this.intervalTimer = setInterval(this.deleteLastDialed, 300);
  }

  stopAutoDeleteLastDialed() {
    clearInterval(this.intervalTimer);
  }

  dialNum = () => {
    Vibration.vibrate(vibrateDuration);
    alert("call " + this.state.dialed);
  }

  sendMessage = () => {
    Vibration.vibrate(vibrateDuration);
    if (this.state.dialed === "") {
      alert("compose message");
    } else {
      alert("compose message for " + this.state.dialed);
    }
  }

  render() {
    return (
      <Container style={{flex: 1}}>
        <View style={styles.dialView}>
          <Text style={{color: "#ffffff", fontSize: 55}}>{this.state.dialed}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexShrink: 1}}>
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='1' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='2' label2='ABC' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='3' label2='DEF' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='4' label2='GHI' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='5' label2='JKL' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='6' label2='MNO' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='7' label2='PQRS' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='8' label2='TUV' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='9' label2='WXYZ' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.sendMessage.bind(this)} label='message' label2='*' />
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.updateDialed.bind(this)} label='0' label2="+"/>
          <DialKey onRef={ref =>(this.onPressCallback = ref)}
                   onPressInCallBack = {this.startAutoDeleteLastDialed.bind(this)}
                   onPressOutCallBack = {this.stopAutoDeleteLastDialed.bind(this)}
                   label='backspace'
                   label2='#' />
          <DialKey/>
          <DialKey onRef={ref =>(this.onPressCallback = ref)} onPressCallback = {this.dialNum.bind(this)} label='Call' />
          <DialKey/>
        </View>
      </Container>
    );
  }
}

export default DialPad;
