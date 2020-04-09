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
    fetch(`https://damp-refuge-17780.herokuapp.com/nearme/`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        dispatch({ type: "FETCH_DATA", payload: responseJson});
      })
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header>
        <LocationHeader />
      </Header>
      <ScrollView>
          {
            state.data.map(vendorInfo=>{
              return(
                vendorInfo.Videostats.map(videoInfo=>{
                  return(
                    <Card
                      key={videoInfo.video_id}
                      customOnPressForVendorProfile={() =>
                        navigation.navigate("vendorProfileScreen")
                      }
                      customOnPressForComment={() =>
                        navigation.navigate("commentScreen")
                      }
                      customOnPressForReview={() =>
                        navigation.navigate("reviewScreen")
                      }
                      vendorInfo={vendorInfo}
                      videoInfo={videoInfo}
                    />
                  )
                })
              )
            })
          }        
              
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
