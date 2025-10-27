import React,{Component} from "react";
import {View,Text, Pressable, StyleSheet, TextInput} from "react-native";

class DynamicForm extends Component{
    constructor(props){
        super(props)
        this.state = {comentario:""}
    }
    onSubmit(){
        console.log(this.state.comentario)
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input} keyboardType="default"
                            placeholder="comentario"
                            onChangeText ={text => this.setState({comentario:text})} value={this.state.comentario}/>
                                
                <Pressable style={styles.botonSubmit} onPress={() => this.onSubmit()}>
                    <Text style={styles.textoBoton}> Enviar </Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        margenSuperior: 20,
    },
    input:{
        Height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor:"#ccc",
        borderStyle: "solid",
        borderCurve: 6,
        marginVertical: 10,
    },
    botonSubmit:{
        backgroundColor: "#28a745",
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: "center",
        borderCurve: 4, 
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#28a745"
    },
    textoBoton:{
        color: "#fff"
    }
})


export default DynamicForm