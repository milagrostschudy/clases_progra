import React,{Component} from "react";
import {View,Text, FlatList} from "react-native";
import { auth, db } from "../firebase/config";

class Usuarios extends Component{
    constructor(props){
        super(props),
        this.state = {usuarios: [], loading: true}
    }

    componentDidMount(){
        db.collection("users").onSnapshot(
            docs =>{
                let posts = []
                docs.forEach(doc => {
                    posts.push({id: doc.id, data: doc.data()})
                })
            
                this.setState({
                    usuarios: posts,
                    loading: false 
                })
           console.log(usuarios)})
        
    }

    render(){

        return(
            <View>
                <Text>Lista de Usuarios</Text>
                <FlatList
                data={ this.state.usuarios }
                keyExtractor={ item => item.id.toString() }
                renderItem={ ({item}) => <Text>{item.data.usuario} {item.data.email} </Text> }
                />

            </View>
        )
    }
}

export default Usuarios