import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CommentCard from "./commentCard";
import { ScrollView } from "react-native-gesture-handler";

const commentObject = [
  {
    id: 1,
    comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    userName: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    id: 2,
    comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    userName: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    id: 3,
    comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    userName: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    id: 4,
    comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    userName: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    id: 5,
    comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    userName: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    id: 6,
    comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    userName: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    id: 7,
    comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    userName: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  {
    id: 8,
    comment:
      "Very nice..Awesome taste ..I recommend alll to go and have it once ,you'll love it",
    userName: "USER_NAME",
    likes: 10,
    imageUrl:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  }
];

export default function Comment() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {commentObject.map(comment => {
          return (
            <CommentCard
              key={comment.id}
              comment={comment.comment}
              userName={comment.userName}
              likes={comment.likes}
              imageUrl={comment.imageUrl}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
});
