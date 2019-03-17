import React, { Component } from "react";
import { StatusBar } from 'react-native';
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

import styles from "./styles";

const darth = require("../../../assets/contacts/darth_vader.jpg");
const han = require("../../../assets/contacts/han_solo.jpg");
const jyn = require("../../../assets/contacts/jyn_erso.jpg");
const lando = require("../../../assets/contacts/lando_calrissian.jpg");
const leia = require("../../../assets/contacts/leia_organa.jpg");
const luke = require("../../../assets/contacts/luke_skywalker.jpg");

const datas = [
  {
    img: darth,
    from: "Darth Vader",
    ext: 1009,
    shortMessage: "Its time to build a difference . .",
    date: "24/08/2018",
    time: "3:43 pm",
    unread: 2
  },
  {
    img: han,
    from: "Han Solo",
    ext: 1012,
    shortMessage: "One needs courage to be happy and smiling all time . . ",
    date: "24/08/2018",
    time: "1:12 pm",
    unread: 2
  },
  {
    img: jyn,
    from: "Jyn Erso",
    ext: 1013,
    shortMessage: "Live a life style that matchs your vision",
    date: "24/08/2018",
    time: "10:03 am",
    unread: 1
  },
  {
    img: lando,
    from: "Lando Calrissian",
    ext: 1015,
    shortMessage: "Failure is temporary, giving up makes it permanent",
    date: "24/08/2018",
    time: "5:47 am"
  },
  {
    img: leia,
    from: "Leia Organa",
    ext: 1016,
    shortMessage: "The biggest risk is a missed opportunity !!",
    date: "24/08/2018",
    time: "11:11 pm"
  },
  {
    img: luke,
    from: "Luke Skywalker",
    ext: 1017,
    shortMessage: "Wish I had a Time machine . .",
    date: "24/08/2018",
    time: "8:54 pm"
  },
  {
    img: darth,
    from: "Darth Vader",
    ext: 1009,
    shortMessage: "Its time to build a difference . .",
    date: "24/08/2018",
    time: "3:43 pm"
  },
  {
    img: han,
    from: "Han Solo",
    ext: 1012,
    shortMessage: "One needs courage to be happy and smiling all time . . ",
    date: "24/08/2018",
    time: "1:12 pm"
  },
  {
    img: jyn,
    from: "Jyn Erso",
    ext: 1013,
    shortMessage: "Live a life style that matchs your vision",
    date: "24/08/2018",
    time: "10:03 am"
  },
  {
    img: lando,
    from: "Lando Calrissian",
    ext: 1015,
    shortMessage: "Failure is temporary, giving up makes it permanent",
    date: "24/08/2018",
    time: "5:47 am"
  },
  {
    img: leia,
    from: "Leia Organa",
    ext: 1016,
    shortMessage: "The biggest risk is a missed opportunity !!",
    date: "24/08/2018",
    time: "11:11 pm"
  },
  {
    img: luke,
    from: "Luke Skywalker",
    ext: 1017,
    shortMessage: "Wish I had a Time machine . .",
    date: "24/08/2018",
    time: "8:54 pm"
  }
];

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: datas
    }
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
            <Title>Messages</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("Contacts")}>
              <Icon type="Ionicons" name="md-people" style={{fontSize: 40}}/>
            </Button>
          </Right>
        </Header>

        <View style={{flex: 1}}>
            <List
              dataArray={ this.state.dataSource }
              renderRow={ (data, sectionId, rowId, highLightRow) =>
                <ListItem avatar style={styles.listItem} button={true} onPress={() => alert("Show message from " + data.from)}>
                  <Left>
                    <Thumbnail medium source={data.img} />
                  </Left>
                  <Body style={parseInt(rowId, 10) === (this.state.dataSource.length - 1) ? {borderBottomWidth: null}: null}>
                    <Text numberOfLines={1} tyle={{paddingBottom: 3}}>
                      {"[" + data.ext + "] " + data.from}
                    </Text>
                    <Text numberOfLines={1} note>
                      {data.shortMessage}
                    </Text>
                  </Body>
                  <Right style={parseInt(rowId, 10) === (this.state.dataSource.length - 1) ? {borderBottomWidth: null}: null}>
                    <Text note style={data.unread ? {color: "#D36C27", fontWeight: "bold"} : null}>
                      {data.date}
                    </Text>
                    <Text note style={data.unread ? {color: "#D36C27", fontWeight: "bold"} : null}>
                      {data.time}
                    </Text>
                  </Right>
                  {
                    data.unread && <Badge style={styles.badge}><Text style={styles.text}>{data.unread}</Text></Badge>
                  }
                </ListItem>}
            />
            <Fab
                active={true}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: "#D36C27"}}
                position="bottomRight"
                onPress={() => alert("new message")}
              >
                <Icon type="MaterialIcons" name="edit" style={{fontSize: 30}} />
              </Fab>
        </View>
      </Container>
    );
  }
}

export default Messages;
