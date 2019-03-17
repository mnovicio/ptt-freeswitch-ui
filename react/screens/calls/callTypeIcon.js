import React, { Component} from 'react';

import { Icon } from 'native-base';

class CallTypeIcon extends Component {
  render() {
    let iconName = "phone-incoming";
    let iconColor;
    if (this.props.type === "incoming") {
      // iconName="phone-incoming";
      iconName="call-received";
      iconColor="#5cb85c";
    } else if (this.props.type === "outgoing") {
      // iconName="phone-outgoing";
      iconName="call-made";
      iconColor="#5cb85c";
    } else if (this.props.type === "missed") {
      // iconName="phone-missed";
      iconName="call-missed";
      iconColor="#D92929";
    }
    return (
      <Icon type="MaterialCommunityIcons" name={iconName} style={{color: iconColor, fontSize: 20, paddingRight: 10, paddingTop: 2}} />
    );
  }
}

export default CallTypeIcon;
