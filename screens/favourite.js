import React from 'react'
import {View,  Text,StyleSheet} from 'react-native';
import Header from '../components/header'

class Favourite extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header>
                    
                </Header>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})

export default Favourite;