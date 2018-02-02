import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
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
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label={"Password:"}
          />
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

export default LoginForm;
