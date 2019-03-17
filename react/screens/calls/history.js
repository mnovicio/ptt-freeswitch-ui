import React, { Component } from "react";
import {TouchableNativeFeedback} from "react-native";
import {
  Container,
  Fab,
  Header,
  Title,
  Content,
  Text,
  Button,
  Badge,
  Icon,
  Footer,
  FooterTab,
  List,
  ListItem,
  Left,
  Right,
  Body,
  View,
  Thumbnail,
} from "native-base";

import CallTypeIcon from './callTypeIcon';

const boba = require("../../../assets/contacts/boba_fett.jpg");
const darth = require("../../../assets/contacts/darth_vader.jpg");
const han = require("../../../assets/contacts/han_solo.jpg");
const jyn = require("../../../assets/contacts/jyn_erso.jpg");
const lando = require("../../../assets/contacts/lando_calrissian.jpg");
const leia = require("../../../assets/contacts/leia_organa.jpg");
const luke = require("../../../assets/contacts/luke_skywalker.jpg");
const palpatine = require("../../../assets/contacts/palpatine.jpg");

const datas = [
  {
    img: luke,
    from: "Luke Skywalker a very long name indeed",
    ext: "1017",
    type: "outgoing",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:44"
  },
  {
    img: darth,
    from: "Darth Vader",
    ext: "1009",
    type: "missed",
    date: "24/08/2018",
    time: "3:43 pm",
  },
  {
    img: palpatine,
    from: "Palpatine",
    ext: "1009",
    type: "missed",
    date: "24/08/2018",
    time: "3:43 pm",
  },
  {
    img: han,
    from: "Han Solo",
    ext: "1012",
    type: "outgoing",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:44"
  },
  {
    img: leia,
    from: "Leia Organa",
    ext: "1016",
    type: "incoming",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:06"
  },
  {
    img: boba,
    from: "Boba Fett",
    ext: "1006",
    type: "incoming",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:06"
  },
  {
    img: luke,
    from: "Luke Skywalker",
    ext: "1017",
    type: "outgoing",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:44"
  },
  {
    img: darth,
    from: "Darth Vader",
    ext: "1009",
    type: "incoming",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:44"
  },
  {
    img: palpatine,
    from: "Palpatine",
    ext: "1009",
    type: "outgoing",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:44"
  },
  {
    img: han,
    from: "Han Solo",
    ext: "1012",
    type: "outgoing",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:44"
  },
  {
    img: leia,
    from: "Leia Organa",
    ext: "1016",
    type: "incoming",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:06"
  },
  {
    img: boba,
    from: "Boba Fett",
    ext: "1006",
    type: "incoming",
    date: "24/08/2018",
    time: "3:43 pm",
    duration: "00:00:06",
    last: true
  },
];

class History extends Component {
  constructor(props) {
      super(props);
      this.state = {
        dataSource: datas
      }
  }

  render() {
    return (
      <Container>
        <View>
          <List
            dataArray={ this.state.dataSource }
            renderRow={ (data, sectionId, rowId, highLightRow) =>
              <ListItem avatar button={true} onPress={() => this.props.navigation.navigate("CallHistoryDetail", {details: data})}>
                <Left>
                  <Thumbnail medium source={data.img}/>
                </Left>
                <Body style={parseInt(rowId, 10) === (this.state.dataSource.length - 1) ? {borderBottomWidth: null}: null}>
                  <Text numberOfLines={1} style={{paddingBottom: 3}}>{"[" + data.ext + "] " + data.from}</Text>
                  <View style={{flex: 1, flexDirection: 'row', alignItems: "stretch", justifyContent: "flex-start"}}>
                    <CallTypeIcon type={data.type} />
                    <Text note style={{alignSelf: 'center'}}>{data.date + " " + data.time}</Text>
                  </View>
                </Body>
                <Right style={parseInt(rowId, 10) === (this.state.dataSource.length - 1) ? {borderBottomWidth: null}: null}>
                  <Body>
                    <Button transparent onPress={() => alert("call ext " + data.ext)}>
                      <Icon type="Feather" name="phone"/>
                    </Button>
                  </Body>
                </Right>
              </ListItem>
            }
          />
        </View>

      </Container>
    );
  }
}

export default History;
