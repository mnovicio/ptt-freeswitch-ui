const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    alignSelf: "stretch",
    // height: deviceHeight / 3.5,
    height: 160,
    width: null,
    position: "relative",
    // marginBottom: 10,
    // blurRadius: 1,
    resizeMode: "cover"
  },
  drawerImageAbsolute: {
    position: "absolute",
    // left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    // top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    left: 10,
    top: 31,
    width: 70,
    height: 70,
    // resizeMode: "cover"
    borderRadius: 60
  },
  headerView: {
    position: "absolute",
    top: 32,
    left: 95,
    height: 70,
    width: 205,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'space-evenly',
    backgroundColor: "rgba(27,32,36,0.5)",
  },
  headerTextName: {
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 3,
    fontSize: 18,
    color: "#bfc6ea",

  },
  headerTextExtension: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 30,
    color: "#bfc6ea",
    // borderBottomWidth: 0.3333,
    // borderBottomColor: "#bfc6ea"
  },
  statusView: {
    position: "absolute",
    top: 125,
    left: 0,
    height: 18,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: "rgba(27,32,36,0.5)",
  },
  headerTextStatus: {
    alignSelf: 'center',
    paddingBottom: 2,
    marginLeft: 15,
    paddingRight: 5,
    fontSize: 18,
    color: "#bfc6ea"
  },
  drawerImage: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  itemHeader: {
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: 'transparent',
    borderBottomWidth: 0.3,
    borderBottomColor: "#4F565B",
    marginLeft: 19,
    paddingLeft: null
  },
  listItemText: {
    color: "#bfc6ea",
    fontSize: 20
  },
  listItemTextHeader: {
    color: "#bfc6ea",
    fontSize: 18
  },
  listItemIcon: {
    color: "#bfc6ea",
    fontSize: 28
  },
  listItem: {
    paddingTop: 8,
    backgroundColor: 'transparent'
  }
};
