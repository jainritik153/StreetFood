import React from 'react'
import {View , Text,StyleSheet,ScrollView } from 'react-native'
import Color from '../assets/color'
import ExploreCard from '../components/exploreCard'


export default class ExploreView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <View style={styles.container}> 
          
            <ScrollView>
                <Text style={{fontSize:18,fontWeight:"bold",marginLeft:10,borderBottomColor:"black",borderBottomWidth:0.2,paddingBottom:10,marginTop:8}}>
                    Recommendations for you
                </Text>
                <View style={{backgroundColor:Color.screen_bg_color}}>
                    <View style={styles.header}>
                        <Text style={styles.headerTextCategory}>Category</Text>
                        <Text style={styles.headerText}>See all</Text>
                    </View>
                    <ExploreCard foodCategory={"Chineese"}></ExploreCard>

                    <View style={styles.header}>
                        <Text style={styles.headerTextCategory}>Category</Text>
                        <Text style={styles.headerText}>See all</Text>
                    </View>
                    <ExploreCard foodCategory={"Chineese"}></ExploreCard>

                    <View style={styles.header}>
                        <Text style={styles.headerTextCategory}>Category</Text>
                        <Text style={styles.headerText}>See all</Text>
                    </View>
                    <ExploreCard foodCategory={"Chineese"}></ExploreCard>
                    
                </View> 
            </ScrollView>
            
        </View>      
        )
    }

}
const styles=StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:15
    },
    headerTextCategory:{
        fontSize:15,
        fontWeight:"bold",
        marginLeft:10,
        marginTop:10,
        marginRight:8
    },
    headerText:{
        fontSize:13,
        fontWeight:"bold",
        marginLeft:10,
        marginTop:10,
        marginRight:8,
        color:Color.main_color
    }
})