
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 0,
    paddingRight: 0,
    paddingTop: 0,
    backgroundColor: 'rgb(138, 131, 134)',
  },
  image: {
    flex: 1,
    padding: 0,
    paddingRight: 0,
    paddingTop: 0,
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    textShadowColor: 'white',
    color: 'white',
    textAlign: 'center',
  },
});
