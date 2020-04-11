import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

export default function CommentCard({  userName, comment }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.profileImage}>
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
            }}
            style={styles.image}
          ></Image>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 5 ,marginVertical:10}}>
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold" }}>
            {userName}
          </Text>
          <View style={{ width: 280 }}>
            <Text style={{}}>{comment}</Text>
            
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  profileImage: {
    marginVertical:15,
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
