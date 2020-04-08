import React from "react";
import { View, Text, StyleSheet, Image,StatusBar} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProgressCircle from 'react-native-progress-circle'

const deafultHeight=StatusBar.currentHeight

export default function VideoDetails() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.videoContainer}>
        <Image
          resizeMode="cover"
          source={{
            uri: "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
          }}
          style={{ height: undefined, flex: 1 }}
        ></Image>
      </View>

      <View style={styles.desContainer}>
           <Text>Price:<Text style={{color:"red"}}>100 Rs</Text></Text>
           <Text>Description:A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.</Text> 
      </View>

      <Text style={{color:"grey",paddingHorizontal:15,paddingVertical:10}}>Rating and Reviews</Text>

      <View style={styles.ratingContainer}> 
      <ProgressCircle
            percent={50}
            radius={50}
            borderWidth={8}
            color="orange"
            shadowColor="black"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'50%'}</Text>
        </ProgressCircle>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    height: 380,
    marginTop:deafultHeight+55
  },
  desContainer:{
    padding:15,
    //backgroundColor:"yellow",
    justifyContent:"flex-start",
    flexDirection:"column",
    borderBottomColor:"grey",
    borderBottomWidth:0.2
  },
  ratingContainer:{

  }
});
