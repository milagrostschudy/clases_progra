import React,{Component} from "react";
import {View,Text,Pressable} from "react-native";
import { StyleSheet } from "react-native";

class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {cantidad: 0}
    }

    click(){
        this.setState({
          cantidad: this.state.cantidad + 1
        }) 
    }

    render(){
        return(
            <View style={styles.container}>
                <Text> Cantidad de Clicks: {this.state.cantidad}</Text>
                <Pressable style={styles.contador} onPress={() => this.click()} > 
                    <Text style={styles.text}> Click aquí para contar </Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 5,
         alignItems: "center",
    },
    contador:{
        padding: 7,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderCurve: 4
    },
    text:{
        textWeight: "bold"
    }
})

export default Contador