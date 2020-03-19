import React, { useState } from 'react'
import {StyleSheet ,Text ,View,ScrollView,Image,Platform,StatusBar, ImageBackground, Modal} from 'react-native'
import Color from '../assets/color'
import Header from './HeaderComponent/header'
import Search from './Search'
import Animated from 'react-native-reanimated'
import {Ionicons , MaterialIcons} from 'react-native-vector-icons'
import VideoDetails from './VideoDetailsModal'
import { reloadFromCache } from 'expo/build/Updates/Updates'

const images=[
    {id:1,uri:'https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg'},
    {id:2,uri:'https://2.bp.blogspot.com/-ITLoxRGnovY/T1yYrahoxcI/AAAAAAAACvE/YkO0RTXQktE/s1600/pani+puri-+main.jpg'},
    {id:3,uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREg7HvkWcJTqwRU_579rLSLHnXzjZpqYFUlXQEOJfQCFM0qKQt'},
    {id:4,uri:'https://photos.smugmug.com/Mumbai/i-qGMtZHZ/0/X3/bhelpuri-1-X3.jpg'},
    {id:5,uri:'https://i.ytimg.com/vi/UVnM1WiK3_I/maxresdefault.jpg'},
]

const HEADER_HEIGHT=Platform.OS=='ios'?115:60+StatusBar.currentHeight

const handlePress=(uri)=>{

}

export default function TrendingCategory( ){

    const [modalOpen,setModalOpen] =useState(false)  //react hooks with modalOpen VArible eith deafult value as false
    const [imageuri,setImageuri] =useState("")

    const scrollY=new Animated.Value(0);
    const diffClampScrollY=Animated.diffClamp(scrollY,0,HEADER_HEIGHT)
    const headerY = Animated.interpolate(diffClampScrollY,{
        inputRange:[0,HEADER_HEIGHT],
        outputRange:[0,-HEADER_HEIGHT]
    })
    return(
        <View style={styles.container}>
            
            <Modal visible={modalOpen} animationType="slide">
                <VideoDetails setModal={setModalOpen} setImage={setImageuri}></VideoDetails>
            </Modal>

            <Animated.View style={{
                position:"absolute",
                left:0,
                right:0,
                top:0,
                height:HEADER_HEIGHT,
                backgroundColor:Color.screen_bg_color,
                zIndex:1000,
                elevation:1000,
                transform:[{translateY:headerY}],
                alignItems:"center",
                justifyContent:"center",
                paddingTop:35
            }}> 
                <Search></Search>
            </Animated.View>
       
        <Animated.ScrollView
            scrollEventThrottle={16}
            style={{paddingTop:HEADER_HEIGHT}}
            onScroll={Animated.event([
                {
                    nativeEvent:{contentOffset:{y:scrollY}}
                }
            ])}
        >
            {images.map(image=>(
                <View key={image.id} style={styles.imageConatiner}>
                    <ImageBackground source={{uri:image.uri}} style={{flex:1,height:400,borderRadius:10,borderWidth:0.2,elevation:10}}
                        imageStyle={{borderRadius:10}}
                    >
                        <View style={styles.detailsContainer}>
                            <Text style={styles.title} onPress={()=>{setImageuri(image.uri) ;setModalOpen(true)}}>Dish Name with some description..</Text>
                            <Text style={styles.subtitle}>Vendor_Name </Text>
                            <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                                <Text style={styles.views}>108k views </Text>
                                <Text style={styles.location}>View location</Text>
                            </View>
                            
                        </View>
                    </ImageBackground>
                </View>
            ))}
        </Animated.ScrollView>
        </View>

        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
       
    },
    imageConatiner:{
        height:400,
        margin:20,
    },
    detailsContainer:{
        flex:1,
        display:'flex',
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-end",
        padding:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:Color.secondary_color,
    },
    subtitle:{
        fontWeight:"bold",
        color:Color.secondary_color,
    },
    views:{
        fontWeight:"bold",
        color:Color.secondary_color,
    },
    location:{
        fontWeight:"bold",
        color:"green",
        paddingLeft:"45%"
    },
    titleBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:24,
        marginHorizontal:16
    }
})

