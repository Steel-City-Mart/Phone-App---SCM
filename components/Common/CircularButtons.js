import React from "react";
import Color from '../../Constants/GlobalConstants'
import { StyleSheet, Text, View,Image ,TouchableOpacity} from "react-native";



const CircularButton = (props) => {

  return (
    <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText} >A</Text>
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'black',
        marginTop:5,
        textAlign:'center'
},
button:{
    backgroundColor : 'white',
    width:30,
    height:30,
    borderRadius:100,
    marginVertical:10
}
});

export default CircularButton;