
const React = require('react-native');

const { StyleSheet, Dimensions } = React;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

module.exports = StyleSheet.create({
  sidebar: {
    flex: 1,
    padding: 0,
    paddingRight: 0,
    paddingTop: 0,
    backgroundColor: 'rgb(138, 131, 134)',
  },
  image: {
    flex: 0,
    width: windowWidth * 0.8,
    height: windowHeight * 0.33,
    resizeMode: 'stretch',
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    textShadowColor: 'white',
    color: 'white',
    textAlign: 'center',
  },
});
