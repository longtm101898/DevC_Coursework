import React, { Component } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import ProfileTab from "./container/ProfileTab/profileTab";
import HomeTab from "./container/HomeTab/homeTab";

export default class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <AppContainer />;
  }
}

const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeTab,
    Profile: ProfileTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home`;
        } else if (routeName === "Profile") {
          iconName = "ios-person";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#00abff",
      inactiveTintColor: "gray"
    }
  }
);
const AppSwitchNavigator = createSwitchNavigator({
  Main: { screen: MainNavigator }
});
const AppContainer = createAppContainer(AppSwitchNavigator);
