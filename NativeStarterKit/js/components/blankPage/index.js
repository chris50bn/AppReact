import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import {
  AppRegistry,
  Image,
  StyleSheet,
  View,
} from 'react-native';

var Register = 'http://between.azurewebsites.net/RestServer3/ws/cliente/insertUsuario?nombre=coco&apellido=bonilla&contrasenna=123&correo=chris50bn@hotmail.com&tipo=1';
var REQUEST_URL = 'http://between.azurewebsites.net/RestServer/ws/cliente/clienteFormatoLista';

class BlankPage extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  ////////json////////////////////////////

  constructor(props) {
  super(props);
  this.state = {
    loaded: false,
  };
}

componentDidMount() {
   this.fetchData();
 }


 fetchData() {
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        loaded: true,
        cliente:responseData.cliente,
      });
    })
    .done();
}
/*
render() {
    const { props: { name, index, list } } = this;

    return (
      <Container  style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(name) ? this.props.name : 'Blank Page'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Text>
            {(!isNaN(index)) ? list[index] : 'Create Something Awesome . . .'}
          </Text>
        </Content>
      </Container>
    );
  }
*//*
render() {
    const { props: { name, index, list } } = this;

    return (

      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(name) ? this.props.name : 'Blank Page'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Container>
          var cliente = this.state.loaded[0];
          this.renderCliente(cliente);
          </Container>
        </Container>

  );

}
*/
renderLoadingView() {
  return (
    <View style={styles.container}>
      <Text>
        Loading loaded...
      </Text>
    </View>
  );
}

renderCliente() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{this.state.cliente[0].nombre}</Text>
    </View>
  );
}

//////////////////////////////////////////////

  popRoute() {
    this.props.popRoute();
  }

  render() {

        if (!this.state.loaded) {
          return this.renderLoadingView();
        }
        console.log(
            this.state.cliente.title
            );

        return this.renderCliente();

  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(BlankPage);
