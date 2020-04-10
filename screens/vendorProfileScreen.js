import React, { useEffect, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Ionicons, MaterialIcons } from "react-native-vector-icons";
import Color from "../assets/color";
import color from "../assets/color";
import ProfileImageComponent from "../components/ProfileComponent/profileImageComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

const HEADER_HEIGHT = Platform.OS == "ios" ? 115 : 60 + StatusBar.currentHeight;

const images = [
  { id: 1, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 2, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 3, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 4, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 5, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
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

const Vendorname = "JAI AMBE";

export default function VendorProfileScreen({ navigation }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("call");
  useEffect(() => {
    fetch(`https://damp-refuge-17780.herokuapp.com/getvendor/${Vendorname}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "hihdsfidashfiadshfiafhidfh_________________________________________"
        );
        console.log(responseJson);
        dispatch({ type: "FETCH_DATA", payload: responseJson });
      })
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  console.log("hiiii", state.data.Videos);
  if (state.loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Color.main_color,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProfileImageComponent
            imageUrl={
              state.data[0].Profile_URL
            }
          />

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 30 }]}>
              {state.data[0].Shop_title}
            </Text>
            <Text style={[styles.text, { color: "AEB5BC", fontSize: 14 }]}>
              {state.data[0].Shop_subtitle}
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statusBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>
                {state.data[0].No_of_videos}
              </Text>
              <Text style={[styles.text, styles.subText]}>Videos</Text>
            </View>
            <View
              style={[
                styles.statusBox,
                {
                  borderColor: "#DFD8C8",
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                },
              ]}
            >
              <Text style={[styles.text, { fontSize: 24 }]}>500</Text>
              <Text style={[styles.text, styles.subText]}>Likes</Text>
            </View>
            <View style={styles.statusBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>
                {state.data[0].Followers}
              </Text>
              <Text style={[styles.text, styles.subText]}>Followers</Text>
            </View>
          </View>

          {/* <View style={{ marginTop: 10 }}>
            <Text
              style={[
                styles.subText,
                {
                  marginLeft: 15,
                  fontSize: 13,
                  color: "#52575D",
                  marginBottom: 10,
                  borderBottomColor: "black",
                  borderBottomWidth: 0.2,
                },
              ]}
            >
              Most Liked
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
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
              <TouchableOpacity>
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
              </TouchableOpacity>
              <TouchableOpacity>
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
              </TouchableOpacity>
            </ScrollView>
          </View> */}

          <Text
            style={[
              styles.subText,
              {
                marginLeft: 15,
                fontSize: 13,
                color: "#52575D",
                marginTop: 16,
                borderBottomColor: "black",
                borderBottomWidth: 0.2,
              },
            ]}
          >
            All Videos
          </Text>
          {state.data.map((vendorInfo) => {
            return vendorInfo.Videos.map((videoInfo) => {
              return (
                <View key={videoInfo._id} style={styles.imageConatiner}>
                  <ImageBackground
                    source={{ uri: videoInfo.Url }}
                    style={{
                      flex: 1,
                      height: 400,
                      borderRadius: 10,
                      borderWidth: 0.2,
                      elevation: 10,
                    }}
                    imageStyle={{ borderRadius: 10 }}
                  >
                    <View style={styles.detailsContainer}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("videoDetails", {
                            videoDetailsInfo: videoInfo,
                          })
                        }
                      >
                        <Text style={styles.title}>
                          {videoInfo.Dish_name}
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.subtitle}>{vendorInfo.Shop_title} </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}
                      >
                        <Text style={styles.views}>10 likes </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              );
            });
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#52575D",
  },
  subText: {
    fontSize: 12,
    color: "#AAB5BF",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
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

  imageConatiner: {
    elevation: 100,
    height: 400,
    margin: 12,
  },
  detailsContainer: {
    borderRadius: 10,
    marginTop: 333,
    justifyContent: "flex-end",
    padding: 5,
    backgroundColor: "rgba(52,52,52,0.6)",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: Color.main_color,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: Color.main_color,
  },
  views: {
    fontSize: 13,
    fontWeight: "bold",
    color: Color.main_color,
  },
  location: {
    fontWeight: "bold",
    color: "green",
    paddingLeft: "45%",
  },
});