
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button, Icon, View, Title, Text } from 'native-base';

import { replaceRoute } from '../../actions/route';
import { setUser } from '../../actions/user';
import styles from './styles';

const background = require('../../../images/debate.png');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }

  replaceRoute(route) {
    this.setUser(this.state.name);
    this.props.replaceRoute(route);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
        <Image source={background} style={styles.shadow}>
          <Content>
            <Text style={styles.title}> Inicio de Sesión </Text>
              <View style={styles.bg}>
                <InputGroup style={styles.input}>
                  <Icon name="ios-person" />
                  <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} />
                </InputGroup>
                <InputGroup style={styles.input}>
                  <Icon name="ios-unlock-outline" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                  />
                </InputGroup>
                <Button style={styles.btn} onPress={() => this.replaceRoute('home')}>
                  Login
                </Button>
              </View>
          </Content>
          </Image>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    setUser: name => dispatch(setUser(name)),
  };
}

export default connect(null, bindActions)(Login);
