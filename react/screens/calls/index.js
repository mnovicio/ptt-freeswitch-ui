import React, { Component } from "react";
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Tab,
  Tabs,
  TabHeading,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Badge
} from "native-base";

import DialPad from "./dial"
import History from "./history"
import RecentCalls from "./recent"

import styles from "./styles";

class Calls extends Component {

  componentDidMount = () => {
    /*workaround for issue https://github.com/GeekyAnts/NativeBase/issues/1010*/
    setTimeout(this._tabs.goToPage.bind(this._tabs, 1));
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <StatusBar barStyle="light-content" />
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{fontSize: 35}}/>
            </Button>
          </Left>
          <Body>
            <Title>Calls</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("Contacts")}>
              <Icon type="Ionicons" name="md-people" style={{fontSize: 40}}/>
            </Button>
          </Right>
        </Header>
        {/* <Tabs initialPage={1} tabBarUnderlineStyle={{backgroundColor: "#D36C27"}}> */}
        {/*workaround for issue https://github.com/GeekyAnts/NativeBase/issues/1010*/}
        <Tabs locked ref={component => this._tabs = component} tabBarUnderlineStyle={{backgroundColor: "#D36C27"}}>
          <Tab
            heading={
              <TabHeading>
                <Text>Recent</Text>
              </TabHeading>
            }>
            <RecentCalls />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Dial</Text>
              </TabHeading>
            }>
            <DialPad />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Call logs</Text>
                {/* <Badge style={{ position: 'absolute', right: 12, top: 3, alignSelf: 'center'}}> */}
                <Badge style={styles.badge}>
                  <Text style={styles.text}>2</Text>
                </Badge>
              </TabHeading>
            }>
            <History {...this.props}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Calls;
