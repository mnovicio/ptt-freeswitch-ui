import React, { Component } from "react";
import { StatusBar, ImageBackground } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Image,
  View
} from "native-base";

import styles from "./styles";

class About extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={require("../../../assets/about_bg.png")} style={styles.aboutCover} />
        <View style={styles.headerView}>
          <Text style={{fontSize: 20, color: "#ffffff"}}>MST Voice App</Text>
          <Text note>Version 0.0.1</Text>
        </View>
        <View style={styles.copyrightView}>
          <Text note>© 2018 MST Global</Text>
          <Text note>All rights reserved.</Text>
        </View>
        <View style={styles.licenseView}>
          <Button transparent style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 18, color: '#bfc6ea'}}>LICENSES</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default About;
