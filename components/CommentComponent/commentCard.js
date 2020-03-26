import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

export default function CommentCard({ imageUrl, userName, comment, likes }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.profileImage}>
          <Image
            source={{
              uri: imageUrl
            }}
            style={styles.image}
          ></Image>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 5 }}>
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold" }}>
            {userName}
          </Text>
          <View style={{ width: 280 }}>
            <Text style={{}}>{comment}</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 12, color: "grey", marginRight: 10 }}>
                {likes} likes
              </Text>
              <TouchableOpacity>
                <Icon name="md-heart" color="red" size={18}></Icon>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  profileImage: {
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 0.2,
    borderColor: "black"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
