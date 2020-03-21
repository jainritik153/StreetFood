import React from 'react'
import {View,  Text,StyleSheet, ColorPropType} from 'react-native';
import Color from '../../assets/color'


class CategoryList extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Text>Search</Text>
                    <Text>Search</Text>
                    <Text>Search</Text>
                </View>
                <View style={styles.categoryListContainer}>

                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
  container:{
      flex:1,
  },
  searchContainer:{
    backgroundColor:"black"
  },
  categoryListContainer:{

  }
})

export default CategoryList;