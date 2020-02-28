import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginScreen from '../Screens/Login'
import HomeScreen from '../Screens/HomeScreen'
import CategoryScreen from '../Screens/CategoryScreen'
import ProfileScreen from  '../Screens/ProfileScreen'
import CartScreen from '../Screens/CartScreen'
import OfferScreen from '../Screens/OfferScreen'
import Colors from '../Constants/GlobalConstants'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs';

const mainFlowNavigator = createStackNavigator({
    Login : LoginScreen,
    Home : HomeScreen,
    Category: CategoryScreen,
    Profile : ProfileScreen
})

const bottomTabNavigator = createBottomTabNavigator({
    Home : {screen:mainFlowNavigator, navigationOptions :{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name="ios-home" size={25} color={tabInfo.tintColor}/>
        }
    }},
    Cart :{ screen:CartScreen ,navigationOptions :{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name="ios-cart" size={25} color={tabInfo.tintColor}/>
        }
    }},
    Offers :{ screen:CartScreen ,navigationOptions :{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name="logo-euro" size={25} color={tabInfo.tintColor}/>
        }
    }}},{
    tabBarOptions:{
        activeTintColor:Colors.bottomTabColor
    }
})

export default createAppContainer(bottomTabNavigator)
