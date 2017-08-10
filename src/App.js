import React, { Component } from "react";
import logo from "./logo.svg";
import { Image, StyleSheet, Text, View, UIManager } from "react-native";
import {
  Button,
  ThemeProvider,
  COLOR,
  IconToggle,
  Badge,
  Avatar,
  Icon,
  Toolbar
} from "react-native-material-ui";
import { NativeModules } from 'react-native'
// see https://github.com/necolas/react-native-web
// const UIManager = NativeModules.UIManager
console.log('UIManager', NativeModules, UIManager)
//  UIManager.setLayoutAnimationEnabledExperimental 
//  UIManager.setLayoutAnimationEnabledExperimental(true);
// UIManager.showPopupMenu()
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500
  }
};

class App extends Component {
  great() {
    console.log("great");
  }

  rightToolHandler() {

  }
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.root}>
          {/* <View style={styles.app}> */}
          {/* <View style={styles.header}>
            <Image
              accessibilityLabel="React logo"
              source={logo}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.title}>Welcome to cool React</Text>
          </View> */}
          <Text style={styles.intro}>
            To get started, edit{" "}
            <Text style={styles.code}>src/App/index.js</Text> and save to
            reload.
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.badgeContainer}>
              <Badge size={24} icon="star">
                <Avatar text="BR" />
              </Badge>
            </View>
            <Icon name="star" />
            <Icon name="star" />
            <Badge accent text="8">
              <Button text="Flat" />
            </Badge>
          </View>
          <Toolbar
            size={16}
            leftElement="clear"
            centerElement="Custom icon size"
            rightElement={{
              actions: ["edit"],
              menu: { labels: ["Item 1", "Item 2"] }
            }}
             onRightElementPress={this.rightToolHandler.bind(this)}
          />
          <IconToggle name="sort" /><Text>toggle</Text>
          <Button text="Cool" onPress={this.great.bind(this)} />
          <Button
            text="Cool"
            onPress={() => {}}
            style={{ container: { backgroundColor: "blue" } }}
          />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    padding: 40
  },
  badgeContainer: {
    paddingLeft: 24
  },
  logo: {
    height: 80
  },
  header: {
    backgroundColor: "#222",
    padding: 20
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  intro: {
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
