import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  StatusBar,
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

export default function VendorProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileImageComponent
          imageUrl={
            "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg "
          }
        />

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 30 }]}>
            Manjit Station
          </Text>
          <Text style={[styles.text, { color: "AEB5BC", fontSize: 14 }]}>
            No.1 Chaat Station
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statusBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
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
            <Text style={[styles.text, { fontSize: 24 }]}>4800</Text>
            <Text style={[styles.text, styles.subText]}>Likes</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>485</Text>
            <Text style={[styles.text, styles.subText]}>Views</Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
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
            Most viewed
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
        </View>

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
        {images.map((image) => (
          <View key={image.id} style={styles.imageConatiner}>
            <ImageBackground
              source={{ uri: image.uri }}
              style={{
                flex: 1,
                height: 400,
                borderRadius: 10,
                borderWidth: 0.2,
                elevation: 10,
              }}
              imageStyle={{ borderRadius: 10 }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("videoDetails")}
              >
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>
                    Dish Name with some description..
                  </Text>
                  <Text style={styles.subtitle}>Vendor_Name </Text>
                  <View
                    style={{ flexDirection: "row", alignItems: "flex-start" }}
                  >
                    <Text style={styles.views}>108k views </Text>
                    <Text style={styles.location}>View location</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
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
