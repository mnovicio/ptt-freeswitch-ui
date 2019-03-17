import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default {
  aboutCover: {
    flex: 1,
    width: null,
    height: null
  },
  headerView: {
    position: 'absolute',
    top: 140,
    // left: 111.85,
    width: width,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#00ff00"
  },
  copyrightView: {
    position: 'absolute',
    top: 370,
    // left: 111.85,
    width: width,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#00ff00"
  },
  licenseView: {
    position: 'absolute',
    top: 480,
    width: width,
    // alignSelf: 'stretch',
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#00ff00"
  }
};
