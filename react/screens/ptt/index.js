/**
  * @format
 * @flow
 */

import React, { Component } from "react";
import { NativeModules, DeviceEventEmitter, StatusBar, View, TouchableOpacity, TouchableHighlight, Image, Picker} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Body,
  Left,
  Right,
  Button,
  Grid,
  Row,
  Col,
  Spinner,
  Toast,
  Fab,
  IconNB
} from 'native-base';

import styles from './styles';

import { SABRE_NATIVE_EVENT_PTT_CHANNEL_CHANGED } from '../../actions/action-types';
import { pttChannelChangeRequest } from '../../actions/sabrePTTActions';

const { SabreVoice } = NativeModules;

/* test data */
const dataChannels = [
  {
    channel_id: 1,
    channel_name: "North Production Drive",
  },
  {
    channel_id: 2,
    channel_name: "South Production Drive",
  },
  {
    channel_id: 3,
    channel_name: "Crane Drop Pipe",
  },
  {
    channel_id: 4,
    channel_name: "M110S Production Drives",
  },
  {
    channel_id: 5,
    channel_name: "M120S Production Drive",
  },
  {
    channel_id: 6,
    channel_name: "Trelawney Trade",
  },
  {
    channel_id: 7,
    channel_name: "Final Lining",
  },
  {
    channel_id: 8,
    channel_name: "Bench and Trench",
  },
  {
    channel_id: 9,
    channel_name: "Bullgang",
  },
  {
    channel_id: 10,
    channel_name: "Cranes and Grants",
  },
  {
    channel_id: 11,
    channel_name: "Tunnel Site",
  },
];

class PushToTalk extends Component {
 constructor(props) {
   super(props);
   this.state = {
     pressState: 0,
     changingChannel: false,
     selectedChannel: 1,
     dataSource: dataChannels
   }
 }

 async setCurrentChannel() {
   try {
     /*fetch current selected ptt channel*/
     let iCurrChannel = await SabreVoice.GetCurrentPTTChannelAsyncWait();

     this.setState({selectedChannel: iCurrChannel});
   } catch (e) {
     console.error(e);
   }
 }

 componentDidMount() {
   DeviceEventEmitter.addListener(SABRE_NATIVE_EVENT_PTT_CHANNEL_CHANGED, (e) => {
     if (e.id === 1) {/*not sure what 1 is*/
       this.setState({
         changingChannel: false,
         fabActive: false
       });

       console.log("mike test: " + e.msg);
       SabreVoice.notify(e.id, e.msg);

       Toast.show({
                text: e.msg,
                buttonText: "Okay",
                type: "success",
                // position: "top"
              });
     }
   });

   this.setCurrentChannel();
 }

 updatePressState = (num) => {
   // console.log(num);
   this.setState({
     pressState: num
   });
 }

 changeChannel = (newChannel) => {
   pttChannelChangeRequest(newChannel);
   // SabreVoice.ChangePttChannel(newChannel);
   this.setState({
     selectedChannel: newChannel,
     changingChannel: true
   });

   // setTimeout(() => {
   //   let selectedChannel;
   //   SabreVoice.GetCurrentPTTChannel(
   //     (currentChannel) => {
   //       selectedChannel = currentChannel;
   //       console.log("new channel: " + selectedChannel);
   //     }
   //   );
   //
   //   this.setState({
   //     changingChannel: false
   //   });
   // }, 5000);
 }

 render() {
   return (
     <Container style={styles.container}>
       <Header>
         <StatusBar barStyle="light-content" />
         <Left>
           <Button transparent onPress={() => this.props.navigation.openDrawer()}>
             <Icon name="menu" style={{fontSize: 35}}/>
           </Button>
         </Left>
        <Body>
          <Title>PushToTalk</Title>
        </Body>
        <Right />
      </Header>
      <Grid>
        <Row size={1} style={{ backgroundColor: "#2B3036" }} >
          <Col size={2} style={{alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.333, borderBottomColor: "#D36C27"}} >
              {
                this.state.changingChannel ?
                <View style={{justifyContent: "center", alignItems: "center", paddingTop: 5, paddingBottom: 5, height: 45, width: 53, borderRightWidth: 0.333, borderRightColor: "#D36C27"}}>
                  <Spinner color="red" style={{paddingRight: 5, height: 40}}/>
                </View>
                :
                <View style={{paddingTop: 5, paddingBottom: 5, borderRightWidth: 0.333, borderRightColor: "#D36C27"}}>
                  <Icon type="FontAwesome" name="group" style={{paddingRight: 10, paddingLeft: 5, fontSize: 35, color: "#bfc6ea"}} />
                </View>
              }
          </Col>
          <Col size={9} style={{paddingLeft: 5, paddingTop: 15, paddingRight: 10, justifyContent: 'center', borderBottomWidth: 0.333, borderBottomColor: "#D36C27"}}>
            <View style={{height: 65}}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.selectedChannel}
                onValueChange={(itemValue, itemIndex) => this.changeChannel(itemValue)}>
                {
                  this.state.dataSource.map((item, key) => (
                    <Picker.Item label={item.channel_id + ": " + item.channel_name} value={item.channel_id} key={key} />
                  ))
                }
              </Picker>
            </View>
          </Col>
        </Row>
        <Row size={5} >
          <Col size={1} />
          <Col size={8} style={{alignItems: 'center', justifyContent: 'center'}} >
            <TouchableHighlight
              style={this.state.changingChannel ? styles.halo_red : this.state.pressState === 1 ? styles.halo_green : styles.halo}
              >
              <TouchableOpacity activeOpacity={0.5} disabled={this.state.changingChannel}
                style={styles.microphone}
                onPressIn={() => this.updatePressState(1)}
                onPressOut={() => this.updatePressState(0)}
                >
                <Image source={require("../../../assets/ptt_btn_bg.png")} style={{alignSelf: 'stretch', width: 250, height: 250, borderRadius: 300}} />
                <Icon type="FontAwesome" name="microphone" style={styles.iconStyle}/>
              </TouchableOpacity>
            </TouchableHighlight>
          </Col>
          <Col size={1} />
        </Row>
        <Row size={1} />
      </Grid>
     </Container>
   );
 }
}

export default PushToTalk;
