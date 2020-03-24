import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ColorPropType,
  ScrollView
} from "react-native";

import Header from "../components/HeaderComponent/header";
import LocationHeader from "../components/HeaderComponent/locationHeader";
import Card from "../components/NearmeCardComponent/card";
import NotificationHeader from "../components/HeaderComponent/notificatioHeader";

export default class NearMeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header>
          <NotificationHeader />
          <LocationHeader />
        </Header>
        <ScrollView>
          <Card
            customOnPressForVendorProfile={() =>
              this.props.navigation.navigate("vendorProfileScreen")
            }
            customOnPressForComment={() =>
              this.props.navigation.navigate("commentScreen")
            }
            customOnPressForReview={() =>
              this.props.navigation.navigate("reviewScreen")
            }
          ></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
