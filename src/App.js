import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyB1e2JNvmWV0_IUmkoSGYyb70b5yztAptM',
    authDomain: 'auth-dcbb5.firebaseapp.com',
    databaseURL: 'https://auth-dcbb5.firebaseio.com',
    projectId: 'auth-dcbb5',
    storageBucket: 'auth-dcbb5.appspot.com',
    messagingSenderId: '709645651332'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
