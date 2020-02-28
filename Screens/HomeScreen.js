import React from "react";
import HeaderMenu from '../components/Common/HeaderMenu'
import Colors from '../Constants/GlobalConstants'
import { useSelector } from 'react-redux'
import { HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/Common/HeaderButton'
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableWithoutFeedback, Keyboard,FlatList,TouchableOpacity,Image,Touchable} from "react-native";



const HomeScreen = (props) => {

 const Categories = useSelector (state => state.categories.categories)
    
const drillDownCategory = (CatObj) =>{
    props.navigation.navigate({routeName:'Category',params:{categoryId:CatObj.id, categoryName:CatObj.catName}});
}

HomeScreen.navigationOptions = {
    headerTitle : 'Home',
    headerStyle:{
        backgroundColor:Colors.primary
    },
 headerRight :()=><HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Profile" iconName="ios-person" onPress={()=>{props.navigation.navigate({routeName:'Profile'})}}/></HeaderButtons>
}

const getCatData = (itemData) =>{
    return( <TouchableOpacity onPress={()=>drillDownCategory({id:itemData.item.id ,catName: itemData.item.name})} style = {styles.gridItems}>
                <View >
                    <Image style={styles.image} source={{uri:itemData.item.avatar}} />
                    <Text style = {styles.title}>{itemData.item.name}</Text>
                </View>
            </TouchableOpacity>)
}

  return (
<TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.screen}>
        <View style = {styles.homeScreen}>
          <FlatList numColumns={2} data={Categories} renderItem ={getCatData}/>
        </View>
    </View>
</TouchableWithoutFeedback>
  );



};



const styles = StyleSheet.create({
screen:{
    flex:1
},
gridItems:{
    margin:10,
    height:150,
    width:150,
    borderRadius:10,
    elevation:3,
    padding:15,
    justifyContent : 'flex-end',
    overflow:'hidden'
    
},
image: {
    width:120,
    height:100
  },
homeScreen:{
    flex:1,
    alignItems:'center',
    paddingTop:30
},
list:{
    alignItems:'center',
    paddingTop:10
},
listItem:{
    padding:10,
    borderColor: Colors.primary,
    borderWidth :1 ,
    padding:15,
    marginVertical:10,
    backgroundColor:'white',
    flexDirection:'row'
},
title:{
    flexDirection:'row',
    color:Colors.primary,
    fontSize:12,
    fontWeight:"bold",
    backgroundColor:'white'
}
});

export default HomeScreen;
