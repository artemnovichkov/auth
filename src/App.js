import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyB1e2JNvmWV0_IUmkoSGYyb70b5yztAptM',
    authDomain: 'auth-dcbb5.firebaseapp.com',
    databaseURL: 'https://auth-dcbb5.firebaseio.com',
    projectId: 'auth-dcbb5',
    storageBucket: 'auth-dcbb5.appspot.com',
    messagingSenderId: '709645651332'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        </CardSection>
      );
      case false:
      return <LoginForm />;
      default:
        return <Spinner size="large" style={{ alignItems: 'center', justifyContent: 'center' }} />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
