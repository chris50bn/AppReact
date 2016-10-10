
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';

const background = require('../../../images/debate3.jpg');


class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushNewRoute(route);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Image source={background} style={styles.shadow}>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="ios-power" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'AppDebate'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          <Button block> Debates </Button>
          <Button block success> Informacion del debate </Button>
          <Button block info> Información </Button>
          <Button block warning> Reglamento </Button>
          <Button block danger> Preguntas </Button>
        </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
