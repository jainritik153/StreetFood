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

export default function NearMeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header>
        <LocationHeader />
      </Header>
      <ScrollView>
        <Card
          customOnPressForVendorProfile={() =>
            navigation.navigate("vendorProfileScreen")
          }
          customOnPressForComment={() => navigation.navigate("commentScreen")}
          customOnPressForReview={() => navigation.navigate("reviewScreen")}
        />
        <Card
          customOnPressForVendorProfile={() =>
            navigation.navigate("vendorProfileScreen")
          }
          customOnPressForComment={() => navigation.navigate("commentScreen")}
          customOnPressForReview={() => navigation.navigate("reviewScreen")}
        />
        <Card
          customOnPressForVendorProfile={() =>
            navigation.navigate("vendorProfileScreen")
          }
          customOnPressForComment={() => navigation.navigate("commentScreen")}
          customOnPressForReview={() => navigation.navigate("reviewScreen")}
        />
        <Card
          customOnPressForVendorProfile={() =>
            navigation.navigate("vendorProfileScreen")
          }
          customOnPressForComment={() => navigation.navigate("commentScreen")}
          customOnPressForReview={() => navigation.navigate("reviewScreen")}
        />
        <Card
          customOnPressForVendorProfile={() =>
            navigation.navigate("vendorProfileScreen")
          }
          customOnPressForComment={() => navigation.navigate("commentScreen")}
          customOnPressForReview={() => navigation.navigate("reviewScreen")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
