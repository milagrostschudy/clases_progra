import React,{Component} from "react";
import {StyleSheet, Image,View,Text, FlatList} from "react-native";


function Card(props){
    return(
        <View>
            <Text>{props.info.title} </Text>
            <Text>{props.info.price}</Text>
            <Text>{props.info.description}</Text>
            <Text>{props.info.category}</Text>
            <Image style={styles.image} source={{uri: props.info.image}}
                resizeMode="contain"/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 400
    }
})

export default Card 