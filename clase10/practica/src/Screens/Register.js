import React,{Component} from "react";
import {View,Text, Pressable, TextInput, StyleSheet} from "react-native";

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {email: "", password:"", userName: ""}
    }

    onSubmit(){
        console.log(this.state.email, this.state.password, this.state.userName)
    }

    render(){
        return(
            <View style={styles.container} >
                <Text> Formulario de Register</Text>
                 <TextInput style={styles.input} keyboardType="email-address"
                            placeholder="email" 
                            onChangeText={text => this.setState({email:text})} value={this.state.email}/>

                <TextInput style={styles.input} keyboardType="default"
                            placeholder="password"
                            secureTextEntry={true}
                            onChangeText={text => this.setState({password:text})} value={this.state.password}/>

                <TextInput style={styles.input} keyboardType="default"
                            placeholder="userName"
                            onChangeText={text => this.setState({userName:text})} value={this.state.text}/>
                
                <Pressable style={styles.botonSubmit} onPress={() => this.onSubmit()}>
                    <Text style={styles.textoBoton}> Registrarse </Text>
                </Pressable>

                <Pressable style={styles.botonLogin} onPress={ ()=> this.props.navigation.navigate('Login')}>
                    <Text style={styles.textoBoton} >Ir a Login</Text>
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
    },
    botonLogin:{
        backgroundColor: "red",
        width:130,
        marginLeft: 20,
        padding: 4,
        marginTop: 5 
    },
})


export default Register