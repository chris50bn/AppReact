'use strict';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({

  buttonDisabled: {
    backgroundColor: '#2bbbad',
    padding: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    height: 60,
    backgroundColor: '#D6D2D2'
  },
  orText: {
    alignSelf: 'center',
    marginTop: 20
  },
  message: {
    color: 'red',
    marginLeft: 5
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'transparent'
  },

  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#374046',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 5,
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 10,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#001900',
  },
  title: {
    marginTop: 50,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  containerImage: {
  flex: 1,
  justifyContent: 'center',
  //alignItems: 'center'
},
});
