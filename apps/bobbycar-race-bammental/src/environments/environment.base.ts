// This file is the base of all the environment files that will be replaced later on.
import packageJson from '../../../../package.json';

export const environment = {
  env: 'BASE',
  appVersion: packageJson.version,
  firebase: {
    projectId: 'bobbycar-race-bammental',
    appId: '1:832551395783:web:19a427780cff9cd8cdb9e2',
    storageBucket: 'bobbycar-race-bammental.appspot.com',
    apiKey: 'AIzaSyBeizFg100_QT7drxcubi_5AN-iC94Zihk',
    authDomain: 'bobbycar-race-bammental.firebaseapp.com',
    messagingSenderId: '832551395783',
    measurementId: 'G-TPNX0T965J',
  },
  production: false,
};
