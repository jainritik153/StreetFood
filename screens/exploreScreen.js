import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import Color from "../assets/color";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import ExploreCard from "../components/ExploreComponent/exploreVideoCard";
import exploreCategoryScreen from "./exploreCategoryScreen";
const HEADER_HEIGHT = StatusBar.currentHeight;

const categories = [
  { id: 2, categoryName: "Chineese" },
  { id: 3, categoryName: "Dosa Special" },
  { id: 1, categoryName: "Italian Pizza" },
  { id: 4, categoryName: "Pasta" },
  { id: 5, categoryName: "Vada Pav" },
  { id: 6, categoryName: "Bhel Special" },
  { id: 7, categoryName: "Frankie" },
  { id: 8, categoryName: "Pani Puri" },
  { id: 9, categoryName: "Maggie" },
  { id: 10, categoryName: "Cheesy Food" },
];

const images = [
  { id: 1, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 2, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 3, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 4, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 5, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
];

//changed class component to function component
function exploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.categoryListContainer}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id}>
              <Text
                key={category.id}
                style={styles.category}
                onPress={() => navigation.navigate("exploreCategoryScreen")}
              >
                {category.categoryName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.exploreMediaContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("videoDetails")}
            >
              <ExploreCard
                imageUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScbCH9nEkq0wlDTl6y1Yfksd_HHHdeO8zC48IS24uz4l6lfi0n"
                }
              />
            </TouchableOpacity>
            <ExploreCard
              imageUrl={
                "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg"
              }
            />
          </View>
          <View>
            <View
              style={[styles.mediaImageContainer, { width: 350, height: 230 }]}
            >
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://cdn.cnn.com/cnnnext/dam/assets/161201144840-5-mumbai-street-food-chutney-sandwich.jpg",
                }}
              ></Image>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={[styles.mediaImageContainer, { width: 175, height: 300 }]}
            >
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{
                  uri:
                    "https://media-cdn.tripadvisor.com/media/photo-s/19/14/bf/33/photo0jpg.jpg",
                }}
              ></Image>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View
                style={[
                  styles.mediaImageContainer,
                  { width: 175, height: 150 },
                ]}
              >
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={{
                    uri:
                      "https://www.holidify.com/blog/wp-content/uploads/2015/09/patti-samosa.jpg",
                  }}
                ></Image>
              </View>
              <View
                style={[
                  styles.mediaImageContainer,
                  { width: 175, height: 150 },
                ]}
              >
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={{
                    uri:
                      "https://s3-eu-west-1.amazonaws.com/iya-news-prod.inyourarea.co.uk/2018/11/Greek-street-food-comes-to-Canary-Wharf-with-the-launch-of-The-Athenian-_-The-Wharf3.jpg",
                  }}
                ></Image>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 55,
  },
  categoryListContainer: {
    backgroundColor: Color.light_grey,
    padding: 5,
    marginTop: 5,
  },
  category: {
    padding: 5,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderWidth: 0.2,
    marginHorizontal: 5,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "white",
    fontWeight: "bold",
  },
  exploreMediaContainer: {},
  mediaImageContainer: {
    width: 175,
    height: 210,
    borderRadius: 5,
    overflow: "hidden",

    marginLeft: 3,
    marginVertical: 2,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default exploreScreen;
