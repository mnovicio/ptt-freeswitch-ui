import React, { Component } from "react";
import { StatusBar, ListView} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Thumbnail
} from "native-base";
import styles from "./styles";

/*test data*/
const boba = require("../../../assets/contacts/boba_fett.jpg");
const bossk = require("../../../assets/contacts/bossk.jpg");
const chewbacca = require("../../../assets/contacts/chewbacca.jpg");
const darth = require("../../../assets/contacts/darth_vader.jpg");
const dengar = require("../../../assets/contacts/dengar.jpg");
const greedo = require("../../../assets/contacts/greedo.jpg");
const han = require("../../../assets/contacts/han_solo.jpg");
const jyn = require("../../../assets/contacts/jyn_erso.jpg");
const lando = require("../../../assets/contacts/lando_calrissian.jpg");
const leia = require("../../../assets/contacts/leia_organa.jpg");
const luke = require("../../../assets/contacts/luke_skywalker.jpg");
const nien = require("../../../assets/contacts/nien_nunb.jpg");
const orson = require("../../../assets/contacts/orson_krennic.jpg");
const palpatine = require("../../../assets/contacts/palpatine.jpg");


const datas = [
  // {
  //   name: "A",
  //   itemDivider: true
  // },
  {
    name: "This is an example of a very long name",
    img: luke,
    ext: "1005",
    last: "true"
  },
  // {
  //   name: "B",
  //   itemDivider: true
  // },
  {
    name: "Boba Fett",
    img: boba,
    ext: "1006"
  },
  {
    name: "Bossk Bossk",
    img: bossk,
    ext: "1007",
    last: true
  },
  // {
  //   name: "C",
  //   itemDivider: true
  // },
  {
    name: "Chewbacca",
    img: chewbacca,
    ext: "1008",
    last: true
  },
  // {
  //   name: "D",
  //   itemDivider: true
  // },
  {
    name: "Darth Vader",
    img: darth,
    ext: "1009"
  },
  {
    name: "Dengar",
    img: dengar,
    ext: "1010",
    last: true
  },
  // {
  //   name: "G",
  //   itemDivider: true
  // },
  {
    name: "Greedo",
    img: greedo,
    ext: "1011"
  },
  {
    name: "Han Solo",
    img: han,
    ext: "1012"
  },
  {
    name: "Jyn Erso",
    img: jyn,
    ext: "1013"
  },
  {
    name: "Lando Calrissian",
    img: lando,
    ext: "1015"
  },
  {
    name: "Leia Organa",
    img: leia,
    ext: "1016"
  },
  {
    name: "Luke Skywalker",
    img: luke,
    ext: "1017"
  },
  {
    name: "Nien Nunb",
    img: nien,
    ext: "1018"
  },
  {
    name: "Orson Krennic",
    img: orson,
    ext: "1019"
  },
  {
    name: "Palpatine",
    img: palpatine,
    ext: "1020"
  }
];
/**/

class ContactItemList extends Component {
  render() {
    // console.log(this.props.mydata)
    let data = this.props.details;
    // let isDivider = data.itemDivider ? true : false;
    let lastItem = this.props.lastItem;
    // console.log(data);
    // console.log(isDivider);
    // console.log(lastItem);
    // if (isDivider) {
    //   return (
    //     <ListItem itemDivider>
    //       <Text>{data.name}</Text>
    //     </ListItem>
    //   );
    // } else {
      return (
        <ListItem avatar>
          <Left>
            <Thumbnail medium source={data.img} />
          </Left>
          <Body style={lastItem ? {borderBottomWidth:null} : null}>
            <Text numberOfLines={2}>{data.name}</Text>
            <Text>Ext: {data.ext}</Text>
          </Body>
          <Right style={lastItem ? {borderBottomWidth:null} : null}>
            <Body>
              <Button transparent>
                {/* <Icon type="Feather" name="phone" onPress={(data) => this.props.navigation.navigate("Calls")}/> */}
                <Icon type="Feather" name="phone" onPress={() => alert("Call Ext: " + this.props.mydata.ext)}/>
              </Button>
            </Body>
          </Right>
        </ListItem>
      );
    // }

  };
}

class ContactList extends Component {
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
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Contacts</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={ this.state.dataSource }
            renderRow={ (data, sectionId, rowId, highLightRow) =>
              <ContactItemList
                details={ data}
                lastItem={ parseInt(rowId, 10) === (this.state.dataSource.length - 1) }
                navigation={ this.props.navigation } />
            }
          />
        </Content>
      </Container>
    );
  }
}

export default ContactList;
