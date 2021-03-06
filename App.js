import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import NearMe from "./screens/nearme";
import Explore from "./screens/explore";
import Trending from "./screens/trending";
import SignInScreen from "./screens/SignInScreen";
import Icon from "react-native-vector-icons/Ionicons";
import Color from "./assets/color";
import { NavigationContainer } from "react-navigation";
import TrendingVideoScreen from "./screens/trendingVideoScreen";
import VendorProfileScreen from "./screens/vendorProfileScreen";
import Review from "./components/ReviewComponent/review";
import Comment from "./components/CommentComponent/comment";
import VideoDetails from "./screens/VideoDetailsScreen";
import SignUpScreen from "./screens/SignUpScreen";
import UserProfile from "./screens/userProfileScreen";
import SignIn from "./screens/signIn";

const TabNavigator = createBottomTabNavigator(
  {
    NearMe: {
      screen: NearMe,
      navigationOptions: {
        tabBarLabel: "NearMe",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-pin" color={tintColor} size={24} />
        )
      }
    },
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "Explore",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-search" color={tintColor} size={24} />
        )
      }
    },
    Trending: {
      screen: Trending,
      navigationOptions: {
        tabBarLabel: "Trending",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-trending-up" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: SignIn,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Color.theme_color,
      inactiveTintColor: "grey",
      style: {
        backgroundColor: Color.main_color,
        borderTopWidth: 0,
        elevation: 5
      }
    }
  }
);

export default createAppContainer(TabNavigator);
