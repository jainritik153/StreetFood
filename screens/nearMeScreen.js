import React, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ColorPropType,
  ScrollView,
} from "react-native";

import Header from "../components/HeaderComponent/header";
import LocationHeader from "../components/HeaderComponent/locationHeader";
import Card from "../components/NearmeCardComponent/card";
import NotificationHeader from "../components/HeaderComponent/notificatioHeader";

const Data = [
  {
    id: 1,
    Vendor_name: "JaiAmbe",
    Followers: 120,
    Video_stats: [
      {
        video_id: 1,
        likes: 20,
        Comments: 30,
        Review: 10,
        url: "https://im.rediff.com/getahead/2017/mar/28foodies5.jpg",
      },
      {
        vidoe_id: 2,
        likes: 30,
        Comments: 30,
        Review: 10,
        url: "https://im.rediff.com/getahead/2017/mar/28foodies5.jpg",
      },
    ],
    location: "Vasai",
  },
  {
    id: 2,
    Vendor_name: "Tungareshwarrrrr",
    Followers: 150,
    Video_stats: [
      {
        video_id: 3,
        url: "https://im.rediff.com/getahead/2017/mar/28foodies5.jpg",
        likes: 350,
        Comments: 300,
        Review: 100,
      },
      {
        vidoe_id: 4,
        url: "https://im.rediff.com/getahead/2017/mar/28foodies5.jpg",
        likes: 300,
        Comments: 40,
        Review: 10,
      },
    ],
    location: "Vasai",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        data: [],
        error: "Something went wrong",
      };
  }
};

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export default function NearMeScreen({ navigation }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_DATA", payload: Data });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header>
        <LocationHeader />
      </Header>
      <ScrollView>
        {state.data.map((cardData) => {
          return cardData.Video_stats.map((video) => {
            return (
              <Card
                customOnPressForVendorProfile={() =>
                  navigation.navigate("vendorProfileScreen")
                }
                customOnPressForComment={() =>
                  navigation.navigate("commentScreen")
                }
                customOnPressForReview={() =>
                  navigation.navigate("reviewScreen")
                }
                videoStats={video}
                cardData={cardData}
              />
            );
          });
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
