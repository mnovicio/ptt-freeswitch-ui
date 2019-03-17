import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import {
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Text,
  Thumbnail,
  Right,
  View,
  Grid,
  Row,
  Column
} from 'native-base';

import CallTypeIcon from './callTypeIcon';
import styles from './styles';

class CallHistoryDetail extends Component {
  getCallTypeDisplay(type) {
    let callTypeDisplay;
    if (type.toUpperCase() === 'INCOMING') {
      callTypeDisplay = "Incoming";
    } else if (type.toUpperCase() === 'OUTGOING') {
      callTypeDisplay = "Outgoing";
    } else if (type.toUpperCase() === 'MISSED') {
      callTypeDisplay = "Missed";
    }

    return callTypeDisplay;
  }

  render() {
    // console.log(this.props);
    const {navigation} = this.props;
    const detail = navigation.getParam('details', null);
    // console.log(details);
    return (
      <Container>
        <Header>
          <StatusBar barStyle="light-content" />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Call Info</Title>
          </Body>
          <Right>
            <Icon
              type="MaterialCommunityIcons"
              name="message-text-outline"
              style={styles.messageIcon}
              onPress={() => alert("send message to ext: " + detail.ext)}
            />
          </Right>
        </Header>
        <View style={styles.historyContactDetailView}>
          <View style={styles.historyThumbnailView}>
            <Thumbnail style={styles.historyThumbnail} source={detail.img}/>
          </View>
          <View style={styles.historyNameView}>
            <Text numberOfLines={2} style={styles.historyContactName}>{"[" + detail.ext + "] " + detail.from}</Text>
          </View>
          <View style={styles.callIconView}>
            <Icon
              type="Feather"
              name="phone"
              style={styles.callIcon}
              onPress={() => alert("call ext: " + detail.ext)}
            />
          </View>
        </View>
        <Content padder >
          <Card >
            <CardItem style={{paddingLeft: null, paddingRight: null}}>
              <View>
                <View style={{width: 335.3, alignSelf: 'stretch', borderBottomWidth: 0.333, borderBottomColor: '#D36C27', paddingBottom: 12}}>
                  <Text style={{paddingLeft: 17, color: '#bfc6ea', fontSize: 18}}>{detail.date}</Text>
                </View>
                <View style={{paddingLeft: 17, paddingRight: 17, paddingTop: 10, flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
                  <View style={{paddingTop: 3}}>
                    <CallTypeIcon type={detail.type} />
                  </View>
                  <View style={{width: 210}}>
                    <Text style={{paddingBottom: 5, fontSize: 22, color: "#bfc6ea"}}>{this.getCallTypeDisplay(detail.type)}</Text>
                    <Text note style={{fontSize: 18}}>{detail.time}</Text>
                  </View>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text note style={{fontSize: 18}}>{detail.duration}</Text>
                  </View>
                </View>
            </View>
            </CardItem>
          </Card>
        </Content>
        {/* <Grid>
          <Row style={{height: 150, backgroundColor: "#00ff00"}}>
            <Card>
              <Body style={{flex: 1, flexDirection: "row"}}>
                <Left>
                  <Thumbnail medium source={detail.img}/>
                </Left>
                <Body>
                  <Text>{detail.from}</Text>
                </Body>
                <Right>
                  <Icon type="Feather" name="phone" />
                </Right>
              </Body>
            </Card>
          </Row>
          <Row style={{backgroundColor: "#0000ff"}}>
            <Card style={{marginBottom: 15}}>
              <CardItem>
                <Body>
                  <Text>{detail.from}</Text>
                </Body>
              </CardItem>
            </Card>
          </Row>
        </Grid> */}
      </Container>
    );
  }
}

export default CallHistoryDetail;
