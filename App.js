import React from "react";
import { Button, View } from "react-native";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
console.disableYellowBox = true;

import { NavigationContainer } from "@react-navigation/native";

import Signin from "./src/components/Signin";
import Homepage from "./src/components/Homepage";
import Signup from "./src/components/Signup";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Signin"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Homepage" component={Homepage} />
      <Drawer.Screen name="Signin" component={Signin} />
      <Drawer.Screen name="Signup" component={Signup} />
    </Drawer.Navigator>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Black": require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
      "Montserrat-BlackItalic": require("./assets/fonts/Montserrat/Montserrat-BlackItalic.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
      "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
}
