import React, { useState } from 'react'
import {StyleSheet ,Text ,View,ScrollView,Image,Platform,StatusBar, ImageBackground, Modal,Dimensions} from 'react-native'
import Color from '../assets/color'
import Search from '../components/Search'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler';


const {width,height} =Dimensions.get('screen');

const images=[
    {id:1,uri:'https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg'},
    {id:2,uri:'https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg'},
    {id:3,uri:'https://im.rediff.com/getahead/2017/mar/28foodies5.jpg'},
    {id:4,uri:'https://photos.smugmug.com/Mumbai/i-qGMtZHZ/0/X3/bhelpuri-1-X3.jpg'},
    {id:5,uri:'https://i.ytimg.com/vi/UVnM1WiK3_I/maxresdefault.jpg'},
]

const HEADER_HEIGHT=Platform.OS=='ios'?115:60+StatusBar.currentHeight

const handlePress=(uri)=>{

}

export default function TrendingVideoScreen( ){

   // const [modalOpen,setModalOpen] =useState(false)  //react hooks with modalOpen VArible eith deafult value as false
   // const [imageuri,setImageuri] =useState("")

    const scrollY=new Animated.Value(0);
    const diffClampScrollY=Animated.diffClamp(scrollY,0,HEADER_HEIGHT)
    const headerY = Animated.interpolate(diffClampScrollY,{
        inputRange:[0,HEADER_HEIGHT],
        outputRange:[0,-HEADER_HEIGHT]
    })
    return(
        <View style={styles.container}>
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
                alignItems:"flex-start",
                justifyContent:"center",
                paddingTop:35
            }}> 
            <View style={styles.heading}>
              <Text style={{color:"black",fontWeight:"bold",fontSize:25}}>
                TRENDING VIDEOS
              </Text>
            </View>
            </Animated.View>
       
        <Animated.ScrollView
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            pagingEnabled
            horizontal={true}
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
                    <ImageBackground resizeMode="cover" source={{uri:image.uri}} style={{flex:1,height:undefined,width:undefined,elevation:10}}
                        imageStyle={{borderRadius:10}}
                    >
                        <View style={styles.cardHeaderContainer}>
                            <View style={styles.profileImage}>
                                <Image  source={{uri:"https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg "}} style={styles.image}></Image>
                            </View>
                            <View style={{flex:1,flexDirection:"column"}}>
                                <Text style={{color:Color.main_color,marginTop:5,fontSize:15,fontWeight:"bold"}}>Vendor Name
                                </Text>
                                <Text style={{fontSize:11,color:Color.main_color}}>1,162 followers</Text>
                                <Text style={{fontSize:11,color:Color.main_color,fontStyle:"italic"}}>Mira-Bhhayandar</Text>
                            </View>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <TouchableOpacity>
                                    <Text style={{alignSelf:"center",marginTop:25,marginLeft:70,fontSize:15,fontWeight:"bold",color:Color.theme_color}}>+ Follow</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.detailsContainer}>
                            <Text style={styles.title} >Dish Name with some description..</Text>
                            <Text style={styles.subtitle}>location</Text>
                            <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                                <Text style={styles.views}>108k views </Text>
            
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
        //flex:1,
        marginTop:10,
       //height:450,
        margin:15,
        width:width-30,
        borderRadius:10,
       
        overflow:"hidden"
    },
    detailsContainer:{
        padding:5,
        alignSelf:"center",
        marginTop:380,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        borderBottomEndRadius:10,
        width:width-30,
       // backgroundColor: 'transparent'
       borderRadius:10
       
    },
    title:{
        fontSize:15,
        fontWeight:"bold",
        color:Color.main_color,
    },
    subtitle:{
        fontSize:13,
        fontWeight:"bold",
        color:Color.main_color,
    },
    views:{
        fontSize:13,
        fontWeight:"bold",
        color:Color.main_color,
    },
    location:{
        fontWeight:"bold",
        color:"green",
        marginLeft:160
    },
    titleBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:24,
        marginHorizontal:16
    },
    cardHeaderContainer:{
        flexDirection:"row",
        borderBottomColor:"red",
        borderBottomWidth:0.2,
        borderRadius:10,
        backgroundColor:'rgba(52,52,52,0.4)'
    },
    profileImage:{
        margin:8,
        width:50,
        height:50,
        borderRadius:100,
        overflow:"hidden",
        borderWidth:0.2,
        borderColor:"black"
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
    heading:{
        alignItems:"flex-start",
        margin:5,
        padding:10,
        borderBottomColor:"black",
        borderBottomWidth:0.2,
        marginBottom:20,
     
      }
})

