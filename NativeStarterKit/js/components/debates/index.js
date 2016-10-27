import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon , CardSwiper, DeckSwiper, Picker, Card, CardItem, Thumbnail, List, ListItem} from 'native-base';
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
var state = 0;

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

renderSecciones(){
  const { props: { name, index, list } } = this;
  return(
    <Container style={styles.container}>
      <Header>
        <Button transparent onPress={() => this.popRoute()}>
          <Icon name="ios-arrow-back" />
        </Button>

        <Title>{(name) ? this.props.name : 'Secciones del debate'}</Title>

        <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" />
        </Button>
      </Header>

      <Content>
      <Card >
            <CardItem header  style={{backgroundColor:'#2F4F4F'}} >
              <Thumbnail source={require('../../../images/Podium.png')} />
              <Text>Debate Australiano</Text>
              <Text>Presentación Inicial</Text>
            </CardItem>

            <CardItem  style={{backgroundColor:'#696969'}}>
              <Image style={styles.image} source={require('../../../images/HiRes.jpg')} />

                <Text>
                   El debate australiano existe una presentación inicial de los temas a tratar
                </Text>
           </CardItem>

             <CardItem header  style={{backgroundColor:'#2F4F4F'}} >
               <Thumbnail source={require('../../../images/Podium1.png')} />
               <Text>Debate Australiano</Text>
               <Text>Primeras argumentaciones</Text>
             </CardItem>

             <CardItem style={{backgroundColor:'#696969'}}>
               <Image style={styles.image} source={require('../../../images/debates1.jpg')} />

                 <Text>
                    En el debate australiano la segunda etapa consiste en presentar las primeras argumentaciones de cada una de las partes.
                 </Text>
            </CardItem>

            <CardItem header  style={{backgroundColor:'#2F4F4F'}} >
              <Thumbnail source={require('../../../images/Ask.png')} />
              <Text>Debate Australiano</Text>
              <Text>Preguntas</Text>
            </CardItem>

            <CardItem  style={{backgroundColor:'#696969'}}>
              <Image style={styles.image} source={require('../../../images/debate.jpg')} />

                <Text>
                   En esta parte del debate se dirigen distintas preguntas realizadas hacia cada una de las partes
                </Text>
           </CardItem>

           <CardItem header style={{backgroundColor:'#2F4F4F'}} >
             <Thumbnail source={require('../../../images/users.png')} />
             <Text>Debate Australiano</Text>
             <Text>Nuevas argumentaciones </Text>
           </CardItem>

           <CardItem  style={{backgroundColor:'#696969'}}>
             <Image style={styles.image} source={require('../../../images/debate2.jpg')} />

               <Text>
                    Una vez pasada la estapa de preguntas se continúa con las nuevas argumentaciones de cada posición.
               </Text>
            </CardItem>

            <CardItem header  style={{backgroundColor:'#2F4F4F'}} >
              <Thumbnail source={require('../../../images/acuerdo.png')} />
              <Text>Debate Australiano</Text>
              <Text>Conclusiones</Text>
            </CardItem>

            <CardItem style={{backgroundColor:'#696969'}}>
            <Image style={styles.image} source={require('../../../images/debates2.jpg')} />

                <Text>
                   Por ultimo se dan las conclusiones del debate.
                </Text>
           </CardItem>
         </Card>
      </Content>
    </Container>
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

          <Title>{(name) ? this.props.name : 'Secciones del debate'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
        <Card >
            <CardItem header  style={{backgroundColor:'#2F4F4F'}} >
              <Thumbnail source={require('../../../images/Podium.png')} />
              <Text>Debate Australiano</Text>
              <Text>Presentación Inicial</Text>
            </CardItem>

            <CardItem  style={{backgroundColor:'#696969'}}>
              <Image style={styles.image} source={require('../../../images/HiRes.jpg')} />

                <Text>
                   El debate australiano existe una presentación inicial de los temas a tratar
                </Text>
           </CardItem>

           </Card>
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

        <Title>{(name) ? this.props.name : 'Secciones del debate'}</Title>

        <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" />
        </Button>
      </Header>

      <Content>
      <Card >
          <CardItem header  style={{backgroundColor:'#2F4F4F'}} >
            <Thumbnail source={require('../../../images/Podium1.png')} />
            <Text>Debate Australiano</Text>
            <Text>Primeras argumentaciones</Text>
          </CardItem>

          <CardItem style={{backgroundColor:'#696969'}}>
            <Image style={styles.image} source={require('../../../images/debates1.jpg')} />

              <Text>
                 En el debate australiano la segunda etapa consiste en presentar las primeras argumentaciones de cada una de las partes.
              </Text>
         </CardItem>

         </Card>
      </Content>
    </Container>

      );
    }

    if (state==3){
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(name) ? this.props.name : 'Secciones del debate'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
        <Card >
            <CardItem header  style={{backgroundColor:'#2F4F4F'}} >
              <Thumbnail source={require('../../../images/Ask.png')} />
              <Text>Debate Australiano</Text>
              <Text>Preguntas</Text>
            </CardItem>

            <CardItem  style={{backgroundColor:'#696969'}}>
              <Image style={styles.image} source={require('../../../images/debate.jpg')} />

                <Text>
                   En esta parte del debate se dirigen distintas preguntas realizadas hacia cada una de las partes
                </Text>
           </CardItem>

           </Card>
        </Content>
      </Container>
      //this.renderMovie(movie);
    );
  }
  if (state==4){
  return (
    <Container style={styles.container}>
      <Header>
        <Button transparent onPress={() => this.popRoute()}>
          <Icon name="ios-arrow-back" />
        </Button>

        <Title>{(name) ? this.props.name : 'Secciones del debate'}</Title>

        <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" />
        </Button>
      </Header>

      <Content>
      <Card >
          <CardItem header style={{backgroundColor:'#2F4F4F'}} >
            <Thumbnail source={require('../../../images/users.png')} />
            <Text>Debate Australiano</Text>
            <Text>Nuevas argumentaciones </Text>
          </CardItem>

          <CardItem  style={{backgroundColor:'#696969'}}>
            <Image style={styles.image} source={require('../../../images/debate2.jpg')} />

              <Text>
                   Una vez pasada la estapa de preguntas se continúa con las nuevas argumentaciones de cada posición.
              </Text>
           </CardItem>

           </Card>
        </Content>
      </Container>
    );
  }
    if (state==5){
      return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(name) ? this.props.name : 'Secciones del debate'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
        <Card >
            <CardItem header  style={{backgroundColor:'#2F4F4F'}} >
              <Thumbnail source={require('../../../images/acuerdo.png')} />
              <Text>Debate Australiano</Text>
              <Text>Conclusiones</Text>
            </CardItem>

            <CardItem style={{backgroundColor:'#696969'}}>
            <Image style={styles.image} source={require('../../../images/debates2.jpg')} />

                <Text>
                   Por ultimo se dan las conclusiones del debate.
                </Text>
           </CardItem>

          </Card>
        </Content>
      </Container>

      );
    }

    else
      return this.renderSecciones();
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
