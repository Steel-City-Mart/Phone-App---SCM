import React , {useState } from "react";
import Color from '../../Constants/GlobalConstants'
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity, KeyboardAvoidingView} from "react-native";



const SignupForm = (props) => {
const state = {userName: '',Password: ''}
const [userName , setUserName] = useState('');
const [Password , setPassword] = useState('');
const [email , setEmail] = useState('');
const [phone , setPhone] = useState('');
const [conPass , setConfirmPassword] = useState('');
const [message , setMessage] = useState('');
getUserName = (uname)=>{
setUserName(uname);
}

getPassword = (pass)=>{
setPassword(pass)
}

getEmail = (email)=>{
  setEmail(email);
}
  
getPhone = (phone)=>{
  setPhone(phone)
}

getConfirmPassword= (conPass)=>{
  setConfirmPassword(conPass);
}
  

const signUp = () =>{  
        let signUpPayLoad = {};
        if (conPass == Password){
          signUpPayLoad.name = userName;
          signUpPayLoad.pass = Password;
          signUpPayLoad.email = email;
          signUpPayLoad.phone = phone
          setMessage ('Your account has been successfully created')
        }
        else {
          setMessage ('Passwords not matching')
        }
    
}
  return (
    <View style={styles.container}>
     <TextInput style={styles.inputbox} underlineColorAndroid="rgba(0,0,0,0)"  placeholder=" Email " placeholderTextColor="black" onChangeText={getEmail} />
     <TextInput style={styles.inputbox} underlineColorAndroid="rgba(0,0,0,0)"  placeholder=" Phone " placeholderTextColor="black" onChangeText={getPhone} />
     <TextInput style={styles.inputbox} underlineColorAndroid="rgba(0,0,0,0)"  placeholder=" Name " placeholderTextColor="black" onChangeText={getUserName} />
     <TextInput style={styles.inputbox} underlineColorAndroid="rgba(0,0,0,0)" secureTextEntry={true} placeholder="Password" placeholderTextColor="black" onChangeText={getPassword} />
     <TextInput style={styles.inputbox} underlineColorAndroid="rgba(0,0,0,0)" secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor="black" onChangeText={getConfirmPassword} />
     <TouchableOpacity style={styles.button} onPress={signUp}>
         <Text style={styles.buttonText}>Sign up</Text>
     </TouchableOpacity>
    <Text style={styles.title}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:60
},
inputbox:{
width:300,
height:50,
backgroundColor:'#add8e6',
borderRadius:5,
color:'black',
marginTop:10,
textAlign:'center',
opacity:0.9

},
buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'white',
    marginTop:5,
    textAlign:'center'
},
button:{
backgroundColor : Color.primary,
width:300,
height:30,
borderRadius:25,
marginVertical:10
},
title:{
  color:'red',
  fontSize:20,
  textAlign:'center',
  marginTop:'5%',
  opacity:0.9,
  elevation:5
}
});

export default SignupForm;
