
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
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
    marginTop: deviceHeight / 2.750,
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
