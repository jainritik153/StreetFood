import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import ProfileImageComponent from "../components/ProfileComponent/profileImageComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoComponent from "../components/ExploreComponent/exploreVideoCard";

const defaultHeight = StatusBar.currentHeight;

export default function UserProfile() {
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
            User Name
          </Text>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 15 }]}>
            email@gmail.com
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
                borderBottomColor: "black",
                borderBottomWidth: 0.2
              }
            ]}
          >
            Liked videos
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg"
                }}
              ></ImageBackground>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg"
                }}
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg"
                }}
              ></Image>
            </View>
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
                borderBottomColor: "black",
                borderBottomWidth: 0.2
              }
            ]}
          >
            Favourite videos
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg"
                }}
              ></ImageBackground>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg"
                }}
              ></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg"
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
    flex: 1
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 1
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15
  },
  statusBox: {
    alignItems: "center",
    flex: 1
  },
  mediaImageContainer: {
    width: 170,
    height: 210,
    borderRadius: 12,
    overflow: "hidden",

    marginLeft: 10
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
