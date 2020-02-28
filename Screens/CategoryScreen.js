import React from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity ,Keyboard , TouchableWithoutFeedback,FlatList} from "react-native";
import HeaderMenu from '../components/Common/HeaderMenu'
import Colors from '../Constants/GlobalConstants'
import Product from '../Constants/Product'


const CategoryScreen = (props) => {
  let catId = props.navigation.getParam('categoryId');
  let catName =props.navigation.getParam('categoryName')
  let prodDisp = [];
  for(const prop in Product){
    if (prop == catId){
      prodDisp = Product[prop]
    }
      
  }
  const getCatL1Data = (itemData) =>{
    return( <TouchableOpacity  style = {styles.gridItems}>
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
          <FlatList numColumns={2} data={prodDisp} renderItem ={getCatL1Data}/>
        </View>
    </View>
</TouchableWithoutFeedback>
  );
};

// CategoryScreen.navigationOptions = 
//{
//   headerTitle : 'CATEGORY',
//   headerStyle:{
//       backgroundColor:Colors.primary
//   }
// }

CategoryScreen.navigationOptions  = (navigationData)=>{
 let catName =  navigationData.navigation.getParam('categoryName')

  return {
      headerTitle : catName,
      headerStyle:{
          backgroundColor:Colors.primary
      }
    }
}
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
  justifyContent : 'flex-end'
},
homeScreen:{
  flex:1,
  alignItems:'center',
  paddingTop:30
},
title:{
  flexDirection:'row',
  color:Colors.primary,
  fontSize:12,
  fontWeight:"bold",
  backgroundColor:'white'
},
image: {
  width:120,
  height:100
}
});

export default CategoryScreen;