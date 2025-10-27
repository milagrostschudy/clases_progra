import React from "react";
import {View,Text,Pressable} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Usuarios from "../Screens/Usuarios";
import NuevoPost from "../Screens/NuevoPost";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function HomeMenu(){
    return(
      
            <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
                <Tab.Screen name="Home" component={Home} options={ { headerShown:false, tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> }} />
                <Tab.Screen name="Profile" component={Profile} options={ { headerShown:false, tabBarIcon: () => <Ionicons name="person" size={24} color="black" /> }}  />
                <Tab.Screen name="Usuarios" component={Usuarios} options={ { headerShown:false, tabBarIcon: () => <FontAwesome name="users" size={24} color="black" /> }}  />
                <Tab.Screen name="NuevoPost" component={NuevoPost} options={ { headerShown:false, tabBarIcon: () => <Ionicons name="create" size={24} color="black" /> }}  />
            </Tab.Navigator>
       
    )
}


export default HomeMenu