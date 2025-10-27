import React,{Component} from "react";
import {View,Text, Pressable} from "react-native";
import DynamicForm from "../Components/DynamicForm";

class Home extends Component{
    render(){

        return(
            <View>
                <Text> Pagina Home </Text>
                <DynamicForm/>
            </View>
        )
    }
}


export default Home