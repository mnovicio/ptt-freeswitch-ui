import React, { Component } from "react";
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class Settings extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <StatusBar barStyle="light-content" />
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Drawer")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Setings goes here</Text>
        </Content>

        {/* <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

export default Settings;
