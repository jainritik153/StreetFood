import React, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import ProfileImageComponent from "../components/ProfileComponent/profileImageComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoComponent from "../components/ExploreComponent/exploreVideoCard";
import { TouchableOpacity } from "react-native-gesture-handler";
//import axios from 'axios'

const defaultHeight = StatusBar.currentHeight;

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
        data: {},
        error: "Something went wrong",
      };
  }
};

const initialState = {
  loading: true,
  data: {},
  error: "",
};

const liked = [
  {
    video_id: "1",
    video_url: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg",
  },
  {
    video_id: "2",
    video_url: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg",
  },
  {
    video_id: "3",
    video_url: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg",
  },
  {
    video_id: "4",
    video_url: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg",
  },
];

const username = "Manali";

export default function UserProfile({ navigation }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`https://damp-refuge-17780.herokuapp.com/getuser/${username}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "hihdsfidashfiadshfiafhidfh_________________________________________"
        );
        console.log(responseJson[0].Location);
        dispatch({ type: "FETCH_DATA", payload: responseJson[0] });
      })
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: defaultHeight }}>
          <ProfileImageComponent
            imageUrl={
              "https://lh3.googleusercontent.com/proxy/ErDRclXNJAML1EoOqTyjsgnvbJTJNrGs64y5TkEWJYFJhU1kOq8G8Y1EktNot_Fx5twoYJzcDXlAs-tJQ6Xe2wM_nACJuHTWs4oJA8F8V_II5rt3EYumnoYsS38"
            }
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 30 }]}>
            {state.data.Username}
          </Text>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 15 }]}>
            {state.data.Email_id}
          </Text>
        </View>

        {/* <View style={styles.statsContainer}>
          <View style={styles.statusBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Liked</Text>
          </View>
          <View
            style={[
              styles.statusBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1
              }
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>4800</Text>
            <Text style={[styles.text, styles.subText]}>Favourite</Text>
          </View>
        </View> */}

        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              styles.subText,
              {
                marginLeft: 15,
                fontSize: 17,
                color: "#52575D",
                marginBottom: 10,
              },
            ]}
          >
            Liked videos
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {liked.map((video) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("videoDetails")}
                >
                  <View style={styles.mediaImageContainer} key={video.video_id}>
                    <Image
                      resizeMode="cover"
                      style={styles.image}
                      source={{
                        uri: video.video_url,
                      }}
                    ></Image>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={[
              styles.subText,
              {
                marginLeft: 15,
                fontSize: 17,
                color: "#52575D",
                marginBottom: 10,
              },
            ]}
          >
            Favourite videos
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate("videoDetails")}
            >
              <View style={styles.mediaImageContainer}>
                <ImageBackground
                  resizeMode="cover"
                  style={styles.image}
                  source={{
                    uri:
                      "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg",
                  }}
                ></ImageBackground>
              </View>
            </TouchableOpacity>
            <View style={styles.mediaImageContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg",
                }}
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg",
                }}
              ></Image>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 1,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
  statusBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 170,
    height: 210,
    borderRadius: 12,
    overflow: "hidden",

    marginLeft: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
