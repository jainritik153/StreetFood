import React from 'react'
import {View,  Text,StyleSheet,SafeAreaView,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class NearMe extends React.Component{
    render(){
        return(
                <View style={{flex:1,padding:30}}>
                  <Text>
                      Ritik
                  </Text>
                </View>
           
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default NearMe;