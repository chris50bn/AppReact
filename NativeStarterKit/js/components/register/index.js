import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon , InputGroup, Input, View} from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import {
  AppRegistry,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';

const background = require('../../../images/debate1.jpg');

class Register extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  constructor(props) {
    super(props);
    this.state = {
              nombre: '',
              apellidos: '',
              correo: '',
              contrasenna: '',
              contrasenna_confirmation: '',
              errors: [],
     }
  }

onRegisterPressed(){
  fetch('http://between.azurewebsites.net/RestServer3/ws/cliente/insertUsuario?', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: this.state.nombre,
      apellidos: this.state.apellidos,
      correo: this.state.correo,
      contrasenna:this.state.contrasenna,
      tipo: 1,
    })
  })
}

/*  async onRegisterPressed(){
      try{
        let response = await   fetch(URL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user:{
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            correo: this.state.correo,
            contrasenna:this.state.contrasenna,
            }
          })
        });

        let res = await response.text();
        console.log("res is: "+res);
      } catch(errors) {

      }
  }*/

  render(){

    return(
      <Container>
        <View style={styles.container}>
        <Image source={background} style={styles.shadow}>
          <Content>
            <Text style={styles.title}>Registro</Text>
            <View style={styles.bg}>
            <InputGroup style={styles.input}>
                <Icon name="ios-person" />
                <Input placeholder="nombre " onChangeText={(val) => this.setState({nombre: val})} />
            </InputGroup>
            <InputGroup style={styles.input}>
                <Icon name="ios-person" />
                <Input placeholder="apellidos " onChangeText={(val) => this.setState({apellidos: val})} />
            </InputGroup>
            <InputGroup  style={styles.input}>
                <Icon name="ios-mail" />
                <Input placeholder="correo "  onChangeText={(val) => this.setState({correo: val})} />
            </InputGroup>
            <InputGroup style={styles.input}>
                <Icon name="ios-unlock-outline" />
                <Input placeholder="contraseña " onChangeText={(val) => this.setState({contrasenna: val})} secureTextEntry={true}/>
            </InputGroup>
            <InputGroup style={styles.input}>
                <Icon name="ios-unlock-outline" />
                <Input placeholder="Confirmar contraseña " onChangeText={(val) => this.setState({contrasenna_confirmation: val})}  secureTextEntry={true}/>
            </InputGroup>
            <Button style={styles.btn} onPress={this.onRegisterPressed.bind(this)}>
              Registrarse
            </Button>
            </View>
          </Content>
        </Image>
      </View>
    </Container>
    );
  }


/*
  render() {
    let fields = [
      {ref: 'name', placeholder: 'Full Name', keyboardType: 'default', secureTextEntry: false, message: '* Full Name cannot be blank', style: [styles.inputText]},
      {ref: 'phone', placeholder: 'Phone Number', keyboardType: 'numeric', secureTextEntry: false, message: '* Phone Number cannot be blank', style: [styles.inputText]},
      {ref: 'password', placeholder: 'Password', keyboardType: 'default', secureTextEntry: true, message: '* Password cannot be blank', style: [styles.inputText]},
      {ref: 'passwordd', placeholder: 'Password Confirmation', keyboardType: 'default', secureTextEntry: true, message: '* Password Confirmation cannot be blank', style: [styles.inputText]},
      {ref: 'email', placeholder: 'Email', keyboardType: 'default', secureTextEntry: false, message: '* The email cannot be blank', style: [styles.inputText]},

    ];
    return (
      <Container>
        <View style={styles.container}>
        <Image source={background} style={styles.shadow}>
          <Content>

            <Text style={styles.title}>REGISTER</Text>
            <View style={styles.bg}>
              <InputGroup key={'name'} style={styles.input}>
                  <Icon name="ios-person" />
                  <Input placeholder="Name "{...fields[0]} onFocus={() => this.onFocus({...fields[0]})} onChangeText={(text) => this.state.data.name = text} />
              </InputGroup>
              <InputGroup key={'email'} style={styles.input}>
                  <Icon name="ios-mail" />
                  <Input placeholder="Email " {...fields[4]} onFocus={() => this.onFocus({...fields[4]})} onChangeText={(text) => this.state.data.phone = text} />
              </InputGroup>
              <InputGroup key={'phone'} style={styles.input}>
                  <Icon name="ios-call" />
                  <Input placeholder="Phone " {...fields[1]} onFocus={() => this.onFocus({...fields[1]})} onChangeText={(text) => this.state.data.phone = text} />
              </InputGroup>
              <InputGroup key={'password'} style={styles.input}>
                  <Icon name="ios-unlock-outline" />
                  <Input placeholder="password " {...fields[2]} onFocus={() => this.onFocus({...fields[2]})} onChangeText={(text) => this.state.data.password = text} />
              </InputGroup>
              <InputGroup key={'passwordd'} style={styles.input}>
                  <Icon name="ios-unlock-outline" />
                  <Input placeholder="password " {...fields[3]} onFocus={() => this.onFocus({...fields[3]})} onChangeText={(text) => this.state.data.passwordd = text} />
              </InputGroup>
              <Button style={styles.btn} onPress={() => this.pushNewRoute('home')}>
                register
              </Button>
             </View>
          </Content>
          </Image>
        </View>
      </Container>
    );
  }
*/

  popRoute() {
    this.props.popRoute();
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

export default connect(mapStateToProps, bindAction)(Register);
