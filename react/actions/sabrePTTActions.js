import { NativeModules } from 'react-native';

import {
  SABRE_PTT_REQUEST_CHANNEL_CHANGE,
  SABRE_PTT_CHANNEL_CHANGE_PROCESSED,
} from './action-types';

const { SabreVoice } = NativeModules;

const pttChnChangePromise = ch =>
  new Promise((resolve) => {
    SabreVoice.ChangePttChannel(ch);
    resolve(true);
  });

export const pttChannelChangeRequest = ch => {
  console.log("changing channel to: " + ch);
  SabreVoice.ChangePttChannel(ch);
  // dispatch({
  //   type: SABRE_PTT_REQUEST_CHANNEL_CHANGE,
  //   data: ch,
  // });
};

// export const pttChannelChangeRequest = ch => (dispatch) => {
//   console.log("changing channel to: " + ch);
//   SabreVoice.ChangePttChannel(ch);
//   dispatch({
//     type: SABRE_PTT_REQUEST_CHANNEL_CHANGE,
//     data: ch,
//   });
// };

export const pttChannelChangeProcessed = () => dispatch =>
  dispatch({
    type: SABRE_PTT_CHANNEL_CHANGE_PROCESSED,
  });
