import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginScreen from '../Screens/Login'
import HomeScreen from '../Screens/HomeScreen'
import CategoryScreen from '../Screens/CategoryScreen'
import ProfileScreen from  '../Screens/ProfileScreen'

const Navigator = createStackNavigator({
    Login : LoginScreen,
    Home : HomeScreen,
    Category: CategoryScreen,
    Profile : ProfileScreen
})

export default createAppContainer(Navigator)
