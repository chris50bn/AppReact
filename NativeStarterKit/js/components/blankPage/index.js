import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';
import {
  AppRegistry,
  Image,
  StyleSheet,
  View,
} from 'react-native';


var REQUEST_URL = 'http://localhost:8080/RestA3/ws/clienteData';

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
    loaded: null,
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
        loaded: responseData.loaded,
      });
    })
    .done();
}


render() {
  const { props: { name, index, list } } = this;

    if (!this.state.loaded) {
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

            this.renderLoadingView
         </Container>
         </Container>
     );
    }

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
          this.rendercliente(cliente);
          </Container>
        </Container>

  );

}

renderLoadingView() {
  return (
    <View style={styles.container}>
      <Text>
        Loading loaded...
      </Text>
    </View>
  );
}

rendercliente(cliente) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: cliente.posters.thumbnail}}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{cliente.nombre}</Text>
      //  <Text style={styles.year}>{cliente.year}</Text>
      </View>
    </View>
  );
}

//////////////////////////////////////////////

  popRoute() {
    this.props.popRoute();
  }

/*  render() {
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

        <Content padder>
        if (!this.state.loaded) {
          return this.renderLoadingView();
        }

        var cliente = this.state.loaded;
        return this.rendercliente(cliente);
        </Content>
      </Container>
    );
  }*/
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
