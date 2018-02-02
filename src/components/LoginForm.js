import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' }
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={styles.textInputStyle}
          />
        </CardSection>
        <CardSection>
          <TextInput style={styles.textInputStyle}/>
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  };
}

const styles = {
  textInputStyle: {
    height: 20,
    width: 100
  }
}

export default LoginForm;
