import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileImageComponent(props) {
  return (
        <View style={{alignSelf:"center"}}>
                    <View style={styles.profileImage}>
                        <Image source={{uri:props.imageUrl}} style={styles.image}></Image>
                    </View>
        </View>
  );
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        width:undefined,
        height:undefined,
    },
    profileImage:{
        width:150,
        height:150,
        borderRadius:100,
        overflow:"hidden",
    },
});
