import React,{Component} from "react";
import {View,Text, Pressable, StyleSheet, TextInput} from "react-native";

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {email: "", password:""}
    }

     onSubmit(){
        console.log(this.state.email, this.state.password)
    }
    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.texto}> Ingresar </Text>
                 <TextInput style={styles.input} keyboardType="email-address"
                            placeholder="email" 
                            onChangeText={text => this.setState({email:text})} value={this.state.email}/>
                
                <TextInput style={styles.input} keyboardType="default"
                            placeholder="password"
                            secureTextEntry={true}
                            onChangeText={text => this.setState({password:text})} value={this.state.password}/>

                <Pressable style={styles.botonSubmit} onPress={() => this.onSubmit()}>
                    <Text style={styles.textoBoton}> Login </Text>
                </Pressable>
                <Pressable style={styles.boton} onPress={ ()=> this.props.navigation.navigate('Register')}>
                    <Text style={styles.register}>No tengo cuenta</Text>
                </Pressable>
                <Pressable style={styles.botonHome} onPress={ ()=> this.props.navigation.navigate('HomeMenu', { screen: "Home" } )}>
                    <Text style={styles.home}> Entrar a Home </Text>
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
        marginLeft: 18
    },
    register:{
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    },
    boton:{
        backgroundColor: "pink",
        width:130,
        marginLeft: 20,
        padding: 4,
        marginTop: 10, 

    },
    home:{
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    },
    botonHome:{
        backgroundColor: "purple",
        width:130,
        marginLeft: 20,
        padding: 4,
        marginTop: 5 
    },
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



export default Login