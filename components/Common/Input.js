import React from "react";
import { StyleSheet, Text, View,Image ,TextInput} from "react-native";



const Input = (props) => {

  return (
    <TextInput style={styles.inputbox} underlineColorAndroid="rgba(0,0,0,0)" placeholder="Search" placeholderTextColor="white" />
  );
};

const styles = StyleSheet.create({
input:{
    height:30,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    marginVertical:10
},
inputbox:{
    width:200,
    height:30,
    backgroundColor:'#add8e6',
    borderRadius:15,
    color:'black',
    marginTop:10,
    textAlign:'center',
    opacity:0.9
}
});

export default Input;
