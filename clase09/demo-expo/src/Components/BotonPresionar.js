import React,{Component} from "react";
import {View,Text,Pressable} from "react-native";
import { StyleSheet } from "react-native";

class BotonPresionar extends Component{

    clickeame(){
        console.log("Me clickearon")
    }


    render(){
        return(
            <View>
             <Pressable style={styles.click} onPress={()=> this.clickeame()}> 
                        <Text style={styles.text}> Clickeame </Text>
                        </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    click:{
        padding: 4,
        backgroundColor: "#ccc",
        marginBottom: 10,
        borderCurve: 4,
    },
    text:{
        fontWeight: "bold"
    }
})

export default BotonPresionar