import React, { Component } from 'react';
import logo from './logo.svg';
import { Image, StyleSheet, Text, View } from 'react-native';
import  { Button, ThemeProvider, COLOR  } from 'react-native-material-ui'
// import { NativeModules } from 'react-native'
// see https://github.com/necolas/react-native-web
// const UIManager = NativeModules.UIManager

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500,
  },
}
class App extends Component {
  render() {
    return (
       <ThemeProvider uiTheme={uiTheme}>
      <View style={styles.app}>
        <View style={styles.header}>
          <Image accessibilityLabel="React logo" source={logo} resizeMode="contain" style={styles.logo} />
          <Text style={styles.title}>Welcome to cool React</Text>
        </View>
        <Text style={styles.intro}>
          To get started, edit <Text style={styles.code}>src/App/index.js</Text> and save to reload.
        </Text>
        <Button text="Cool" onPress={() => {}}/>
          <Button text="Cool" onPress={() => {}} style={{ container: { backgroundColor: 'blue' }}} />
      </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 80
  },
  header: {
    backgroundColor: '#222',
    padding: 20
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  intro: {
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});

export default App;