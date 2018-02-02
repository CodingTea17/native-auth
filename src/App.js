import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import Config from 'react-native-config'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: Config.APIKEY,
      authDomain: Config.AUTHDOMAIN,
      databaseURL: Config.DATABASEURL,
      projectId: Config.PROJECTID,
      storageBucket: Config.STORAGEBUCKET,
      messagingSenderId: Config.MESSAGINGSENDERID
    });
  }

  render() {
    return (
      <View>
        <Header heading="Tippy top"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
