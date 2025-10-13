import React, {Component} from "react";
import {View, Text, Pressable} from "react-native";
import BotonPresionar from "../Components/BotonPresionar";
import Contador from "../Components/Contador";
import { StyleSheet } from "react-native";

class Home extends Component{
    render(){
        return(
        <View style={styles.container}>
            <Text> Hola Mundo.</Text>
            <BotonPresionar/>
            <Contador/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        padding: 10
    },
})

export default Home