import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'my-rn-app', () => MyApp
);
import { StyleSheet  } from 'react-native'

const contentStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  title: {
    color: 'white', 
    fontSize: 32, 
    fontWeight: 'bold', 
    paddingTop: 16, 
    paddingLeft: 16, 
    paddingRight: 16
  },
  explanation: { 
    color: 'white', padding: 16
  }
})

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20
  }
})

const errorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    color: 'white',
    backgroundColor: '#EA6A61'
  }
})

module.exports = {
  content: contentStyles,
  loading: loadingStyles,
  error: errorStyles
}
