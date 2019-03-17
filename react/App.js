/**
  * @format
 * @flow
 */

import React from 'react';
import { Root/*, Icon*/ } from 'native-base';
import { createBottomTabNavigator, createTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { Footer, FooterTab, Button, Icon, Text, Badge} from 'native-base';

import PushToTalk from './screens/ptt';
import SideBar from './screens/sidebar';
import Calls from './screens/calls';
import Messages from './screens/messages';
import Settings from './screens/settings';
import ContactList from './screens/contacts';
import CallHistoryDetail from './screens/calls/history_detail';
import About from './screens/about';

const BottomNavigator = createBottomTabNavigator(
  {
    PushToTalk: { screen: props => <PushToTalk {...props} /> },
    Calls: {  screen: props => <Calls {...props} /> },
    Messages: { screen: props => <Messages {...props} /> }
  },
  {
    initialRouteName: "Calls",
    tabBarComponent: ( props ) => {
      return (
        <Footer>
          <FooterTab>
            <Button active={props.navigation.state.index === 0} onPress={() => props.navigation.navigate("PushToTalk")}>
              <Icon type="FontAwesome" name="microphone"/>
              <Text>PushToTalk</Text>
            </Button>
            <Button active={props.navigation.state.index === 1} onPress={() => props.navigation.navigate("Calls")} badge>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon type="MaterialIcons" name="call"/>
              <Text>Calls</Text>
            </Button>
            <Button active={props.navigation.state.index === 2} onPress={() => props.navigation.navigate("Messages")} badge>
              <Badge>
                <Text>5</Text>
              </Badge>
              <Icon type="MaterialCommunityIcons" name="message"/>
              <Text>Messages</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#ff00ff',
      inactiveTintColor: '#00ff00',
      activeBackgroundColor: '#0f0f0f',
      inactiveBackgroundColor: '#f0f0f0',
      labelStyle: {
        color: '#F8F8F8'
      },
      style: {
        backgroundColor: '#9B4E18',
        height: 65
      },
    },
  }
);

const MainStackNavigator = createStackNavigator(
  {
    BottomTab: { screen: BottomNavigator },
    CallHistoryDetail: { screen: props => <CallHistoryDetail {...props}/>}
  },
  {
    headerMode: "none"
  }
);


const Drawer = createDrawerNavigator(
  {
    Main: { screen: MainStackNavigator },
    Settings: { screen: Settings },
    About: { screen: About }
  },
  {
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    drawerWidth: 300,
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Contacts: { screen: props => <ContactList {...props} /> },
  },
  {
    headerMode: "none"
  }
);

export default class App extends React.Component {
  render() {
    return(
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}
