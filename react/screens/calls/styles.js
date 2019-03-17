export default {
  "badge": {
    position: "absolute",
    right: 12,
    top: 4,
    // top: -3,
    alignSelf: "center",

    zIndex: 99,
    height: 18,
    // padding: 1.7,
    // paddingHorizontal: 3
    paddingLeft: 3,
    paddingRight: 3

  },
  "text": {
    // alignSelf: "center",
    top: 2,
    fontSize: 11,
    lineHeight: 14
  },
  dialPad: {
    flex: -1,
    flexShrink: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dialKey: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: 100,
    height: 63,
    borderWidth: 0.3,
    backgroundColor: '#2B3036',
    // borderColor: 'rgb(239, 239, 244)',
    // borderColor: '#373C40',
    borderColor: '#4F565B',
    flexGrow: 1,
    // paddingTop: 8
  },
  dialKeyCall: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 111,
    height: 76,
    borderWidth: 0.3,
    backgroundColor: '#5cb85c',
    // borderColor: 'rgb(239, 239, 244)',
    // borderColor: '#373C40',
    borderColor: '#4F565B',
    flexGrow: 1,
    // paddingTop: 8
  },
  dialKeyIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 100,
    height: 63,
    borderWidth: 0.3,
    backgroundColor: '#2B3036',
    // borderColor: 'rgb(239, 239, 244)',
    // borderColor: '#373C40',
    borderColor: '#4F565B',
    flexGrow: 1,
    // paddingTop: 8
  },
  dialView: {
    flex: -1,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.3333,
    borderColor: "#D36C27"
    // paddingTop: 50,
    // backgroundColor: '#EFEFF4',
    // backgroudColor: "#373C40"
  },
  historyContactDetailView: {
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B3036",
    elevation: 5
  },
  historyThumbnailView: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 90,
  },
  historyThumbnail: {
    height: 68,
    width: 68,
    borderRadius: 35,
    overflow: 'hidden'
  },
  historyNameView: {
    flex: 1,
    height: 100,
    justifyContent: "center"
  },
  historyContactName: {
    color: '#bfc6ea',
    fontSize: 28
  },
  callIconView: {
    alignItems: 'center',
    justifyContent: "center",
    height: 60,
    width: 80,
    borderLeftWidth: 0.333,
    borderLeftColor: '#D36C27'
  },
  callIcon: {
    color: '#D36C27',
    fontSize: 32
  },
  messageIcon: {
    paddingRight: 20,
    fontSize: 30,
    color: "#FFFFFF"
  }


};
