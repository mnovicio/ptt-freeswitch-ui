import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Button,
  Body,
  Thumbnail,
  View,
  Separator
} from "native-base";

import styles from "./styles";

class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content
          bounces={true}
          style={{ flex: 1, backgroundColor: "#2B3036", top: -1 }}
        >
          <View style={{borderBottomWidth: 0.333, borderBottomColor: "#D36C27"}}>
            <Image source={require("../../../assets/drawer_bg.png")} style={styles.drawerCover} />
            <Thumbnail style={styles.drawerImageAbsolute} source={require("../../../assets/contacts/0.jpg")} />
            <View style={styles.headerView}>
              <Text numberOfLines={1} style={styles.headerTextName}>Max Mustermann</Text>
              <View style={{marginLeft: 5, borderBottomWidth: 2, borderBottomColor: "#D36C27"}}/>
              <Text style={styles.headerTextExtension}>1005</Text>
            </View>
            <View style={styles.statusView}>
              <Text style={styles.headerTextStatus}>SIP Registered | PTT Channel 1</Text>
            </View>
          </View>
          <View>
            <ListItem itemHeader style={styles.itemHeader}>
              <Text style={styles.listItemTextHeader}>Settings</Text>
            </ListItem>
            <ListItem icon style={styles.listItem}>
              <Left>
                  <Icon type="MaterialCommunityIcons" name="microphone-settings" style={styles.listItemIcon}/>
              </Left>
              <Body style={{borderBottomWidth: null}}>
                <Text style={styles.listItemText}>Push-To-Talk</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.listItem}>
              <Left>
                  <Icon type="MaterialCommunityIcons" name="phone-settings" style={styles.listItemIcon}/>
              </Left>
              <Body style={{borderBottomWidth: null}}>
                <Text style={styles.listItemText}>SIP Calls</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.listItem}>
              <Left>
                  <Icon type="MaterialCommunityIcons" name="message-settings" style={styles.listItemIcon}/>
              </Left>
              <Body style={{borderBottomWidth: null}}>
                <Text style={styles.listItemText}>SIP Messages</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.listItem}>
              <Left>
                  <Icon type="MaterialIcons" name="settings-ethernet" style={styles.listItemIcon}/>
              </Left>
              <Body style={{borderBottomWidth: null}}>
                <Text style={styles.listItemText}>Network</Text>
              </Body>
            </ListItem>
            <ListItem itemHeader style={styles.itemHeader}>
              <Text style={styles.listItemTextHeader}>Others</Text>
            </ListItem>
            <ListItem icon style={styles.listItem}>
              <Left>
                  <Icon type="FontAwesome" name="language" style={styles.listItemIcon}/>
              </Left>
              <Body style={{borderBottomWidth: null}}>
                <Text style={styles.listItemText}>Language</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.listItem}>
              <Left>
                  <Icon type="MaterialCommunityIcons" name="update" style={styles.listItemIcon}/>
              </Left>
              <Body style={{borderBottomWidth: null}}>
                <Text style={styles.listItemText}>Check Updates</Text>
              </Body>
            </ListItem>
            <ListItem icon button={true} style={styles.listItem} onPress={() => this.props.navigation.navigate("About")}>
              <Left>
                  <Icon type="MaterialIcons" name="info" style={styles.listItemIcon}/>
              </Left>
              <Body style={{borderBottomWidth: null}}>
                <Text style={styles.listItemText}>About</Text>
              </Body>
            </ListItem>
          </View>

        </Content>
      </Container>
    );
  }
}

export default SideBar;
