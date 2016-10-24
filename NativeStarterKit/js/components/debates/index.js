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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var state = 2;

class Debates extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  popRoute() {
    this.props.popRoute();
  }

  /////////////////////////////////////////////////////////////////////

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
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
        movies: responseData.movies,
      });
    })
    .done();
}


/*render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }

    var movie = this.state.movies[0];
    return this.renderMovie(movie);
  }
*/
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
  ////////////////////////////////////////////////////////////////////

  render() {
    const { props: { name, index, list } } = this;

    if (state==1){
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(name) ? this.props.name : 'Debates'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Text>
            {(!isNaN(index)) ? list[index] : 'Parte inicial del debate. . .'}
          </Text>
        </Content>
      </Container>
      //this.renderMovie(movie);
    );
  }
  if (state==2){
  return (
    <Container style={styles.container}>
      <Header>
        <Button transparent onPress={() => this.popRoute()}>
          <Icon name="ios-arrow-back" />
        </Button>

        <Title>{(name) ? this.props.name : 'Debates'}</Title>

        <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" />
        </Button>
      </Header>

      <Content padder>
        <Text>
          {(!isNaN(index)) ? list[index] : 'es la parte media del debate. . .'}
        </Text>
      </Content>
    </Container>
    //this.renderMovie(movie);
  );
}
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

export default connect(mapStateToProps, bindAction)(Debates);
