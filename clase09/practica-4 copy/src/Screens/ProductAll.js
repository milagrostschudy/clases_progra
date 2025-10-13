import React,{Component} from "react";
import {StyleSheet,Text,View, FlatList} from "react-native";
import Card from "../Components/Card";


class ProductAll extends Component{
    constructor(props){
        super(props),
        this.state ={data:[]}
    }

  componentDidMount(){
  fetch("https://rickandmortyapi.com/api/character")
  .then( response => response.json())
  .then(data => this.setState({data: data.results ,nextPage: data.info.next}))
  .catch((error) => console.log('El error fue: ' + error));
}


    render(){
        return(
            <View style={styles.flatlist}>
                <FlatList  
                    data = {this.state.data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <Card info={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatlist: {
    	width: '100%',
        flex: 1
   },

})

export default ProductAll