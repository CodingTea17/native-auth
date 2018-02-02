import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  onButtonPress() {
    const { email, password } = this.state;
    
    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({error: 'Authentication Failed'})
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="coolcats@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label={"Email:"}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label={"Password:"}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'red'
  }
}

export default LoginForm;
