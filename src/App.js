import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID } from 'react-native-dotenv'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: APIKEY,
      authDomain: AUTHDOMAIN,
      databaseURL: DATABASEURL,
      projectId: PROJECTID,
      storageBucket: STORAGEBUCKET,
      messagingSenderId: MESSAGINGSENDERID
    });
  }

  render() {
    return (
      <View>
        <Header heading="Tippy top"/>
      </View>
    );
  }
}

export default App;
