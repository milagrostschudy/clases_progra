import React,{Component} from "react";
import {View,Text, Pressable, StyleSheet} from "react-native";

class Profile extends Component{
    render(){

        return(
            <View>
                <Text style={styles.texto}> Mi perfil </Text>
                <Pressable style={styles.boton} onPress={ ()=> this.props.navigation.navigate('Login')}>
                    <Text style={styles.profile}>Desloguearse. Hacer click aquí te lleva a Login.</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 200,
        marginTop: 20
    },
    profile:{
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    },
    boton:{
        backgroundColor: "pink",
        width:500,
        marginLeft: 20,
        padding: 4,
        marginTop: 5 
    },
})

export default Profile