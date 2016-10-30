
const React = require('react-native');

const { StyleSheet, Dimensions } = React;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

module.exports = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#374046',
  },
  container1: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
},
  shadow: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 20,
  },
  containerA: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0,
    width: windowWidth * 1,
    height: windowHeight * 0.33,
    resizeMode: 'stretch',
  },
  canvas: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
},
});
