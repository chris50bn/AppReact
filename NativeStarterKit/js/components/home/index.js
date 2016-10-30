
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon , CardSwiper, View, DeckSwiper, Picker, Card, CardItem, Thumbnail, List, ListItem} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';

const background = require('../../../images/debate3.jpg');



const Item = Picker.Item;


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

          <Title>{(this.props.name) ? this.props.name : 'BETWEEM'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          <Card >
              <CardItem header onPress={() => this.pushNewRoute('debates')} style={{backgroundColor:'#2F4F4F'}} >
                <Thumbnail source={require('../../../images/discurso.png')} />
                <Text>Debate Australiano</Text>
              </CardItem>

              <CardItem onPress={() => this.pushNewRoute('debates')} style={{backgroundColor:'#696969'}}>
                <Image style={styles.image} source={require('../../../images/debates1.jpg')} />
                  <Text>
                     El debate australiano consiste en que dos equipos de tres miembros discuten
                     sobre un asunto al que se suele llamar proposición.
                  </Text>

             </CardItem>

              <CardItem header onPress={() => this.pushNewRoute('blankPage')}  style={{backgroundColor:'#2F4F4F'}} >
                <Thumbnail source={require('../../../images/mortarboard.png')} />
                <Text note>Universidad Latina de Costa Rica</Text>
                <Text>Facultad de Ciencias Sociales</Text>
                <Text>Escuela de Relaciones Internacionales</Text>
              </CardItem>

              <CardItem  onPress={() => this.pushNewRoute('blankPage')} style={{backgroundColor:'#696969'}}>
                <Image style={styles.image} source={require('../../../images/Ulatina.png')} />
            </CardItem>

          </Card>
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
