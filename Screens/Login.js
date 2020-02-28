import React, {useState } from "react";
import { StyleSheet, Text, Button, TextInput, View,Image,TouchableOpacity } from "react-native";
import { SocialIcon } from "react-native-elements";
import LoginImage from '../components/Login/LoginImage'
import LoginForm  from '../components/Login/LoginForm'
import Color from  '../Constants/GlobalConstants'
import SignupForm from  '../components/Login/SignupForm'

const LoginScreen = (props) => {
  const [buttonText , setButtonText] = useState ('Sign up');
  const [descText , setDescText] = useState ('Do not have an account?');
  const [signUpState , setSignUpState] = useState (false);
  const changeState = () =>{
    if (signUpState == false){
      setSignUpState(true)
      setButtonText('Go to Login')
      setDescText('Already have an account?')
    }
    else{
      setSignUpState(false)
      setButtonText('Sign up')
      setDescText('Do not have an account?')
    }
  
  }

  let content  = <LoginForm property={props}/>
  if (signUpState){
    content =<SignupForm style = {styles.signupForm} property={props}/>
  }
  return (
    <View style={styles.container}>
      <LoginImage/>
      {content}
      <Text>{descText} Press Below</Text>
      <TouchableOpacity style={styles.button} onPress={changeState}>
         <Text style={styles.buttonText}>{buttonText}</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
},
button:{
  backgroundColor : Color.primary,
  width:300,
  height:30,
  borderRadius:25,
  marginVertical:10
  },
  buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'white',
      marginTop:5,
      textAlign:'center'
  },
  signupForm:{
    paddingBottom:20
  }
});

export default LoginScreen;
