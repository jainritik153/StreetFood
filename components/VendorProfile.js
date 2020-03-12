import React from "react";
import { View, Text, StyleSheet, ScrollView ,SafeAreaView,Image} from "react-native";
import {Ionicons , MaterialIcons} from 'react-native-vector-icons'
import Color from "../assets/color";
import color from "../assets/color";

export default function VendorProfile(){
    return(
        <SafeAreaView style={styles.container}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Ionicons name="md-arrow-back" size={24} color="#52575D"></Ionicons>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </View>

                <View style={{alignSelf:"center"}}>
                    <View style={styles.profileImage}>
                        <Image source={{uri:"https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg "}} style={styles.image}></Image>
                    </View>
                    <View style={styles.dm}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text,{fontWeight:"200" , fontSize:36}]}>Manjit Station</Text>
                    <Text style={[styles.text,{color:"AEB5BC" ,fontSize:14}]}>No.1 Chaat Station</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statusBox}>
                        <Text style={[styles.text,{ fontSize:24}]}>483</Text>
                        <Text style={[styles.text,styles.subText]}>Videos</Text>
                    </View>
                    <View style={[styles.statusBox,{borderColor:"#DFD8C8",borderLeftWidth:1,borderRightWidth:1}]}>
                        <Text style={[styles.text,{ fontSize:24}]}>4800</Text>
                        <Text style={[styles.text,styles.subText]}>Likes</Text>
                    </View>
                    <View style={styles.statusBox}>
                        <Text style={[styles.text,{ fontSize:24}]}>485</Text>
                        <Text style={[styles.text,styles.subText]}>Views</Text>
                    </View>
                </View>
                <View style={{marginTop:25}}>
                    <Text style={[styles.subText,{marginLeft:16,fontSize:16,color:"#52575D",marginBottom:16,borderBottomColor:"black",borderBottomWidth:0.2}]}>Most viewed</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image resizeMode="cover" style={styles.image} source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/06/0f/1a/fc/bombay-express.jpg"}}></Image>
                        </View>                       
                        <View style={styles.mediaImageContainer}>
                            <Image resizeMode="cover" style={styles.image} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvQprLw2cmhLl2VoB3cGs08NXBFYoL0KHdX4HlFQDl_Vofu1mT"}}></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image resizeMode="cover" style={styles.image} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS91XlOMvLWTpmM7r_lXIGhn6WruPK05RGs5QgufXi53p_Sb10m"}}></Image>
                        </View>
                       
                    </ScrollView>
                </View>
                
                <Text style={[styles.subText,styles.recent]}>Recent Videos</Text>
                <View style={{alignSelf:"center"}}>
                    <View style={styles.recentItem}>
                        <View style={styles.recentItemIndicator}></View>
                        <View style={{width:250}}>
                            <Text style={styles.text}>S</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    text:{
        color:"#52575D"
    },
    subText:{
        fontSize:12,
        color:"#AAB5BF",
        textTransform:"uppercase",
        fontWeight:"500",
        
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
    titleBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:24,
        marginHorizontal:16
    },
    profileImage:{
        width:200,
        height:200,
        borderRadius:100,
        overflow:"hidden"
    },
    dm:{
        backgroundColor:"#41444B",
        position:"absolute",
        top:20,
        width:40,
        height:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
    infoContainer:{
        alignSelf:"center",
        alignItems:"center",
        marginTop:16
    },
    statsContainer:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop:32,
    },
    statusBox:{
        alignItems:"center",
        flex:1
    },
    mediaImageContainer:{
        width:170,
        height:210,
        borderRadius:12,
        overflow:"hidden",
        marginHorizontal:10,
    }
    
});
