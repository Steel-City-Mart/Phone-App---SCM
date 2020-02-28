import React, {Component, useState} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import { Header, ThemeProvider } from 'react-native-elements';
import Colors from '../../Constants/GlobalConstants';
import {FontAwesome} from '@expo/vector-icons'
import CircularButton from '../../components/Common/CircularButtons'
import Input from '../Common/Input'

const HeaderMenu=(props) => {
  
    return(
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Bren Avalon, Chinnapanahalli , Bangalore. Pincode : 564007</Text>
      <View style={styles.horizontalRow}>
        <View>
            <Input style= {styles.input}></Input>
        </View>
        {/* <View>
           <CircularButton></CircularButton>
        </View> */}
      </View>   
       
    </View>

        );
       
    }

const styles = StyleSheet.create({
  header:{
    width: '100%',
    height: 80,
    backgroundColor:Colors.primary,
    alignItems:'center',
    justifyContent:'center'
  },
  headerTitle:{
    color:'white',
    fontSize:10,
    fontFamily:'open-sans-bold',
    width:200,
    textAlign:"center"

  },
  input:{
    paddingBottom:10,
    textAlign:"center"
  },
  horizontalRow:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',

  }
  
});

export default HeaderMenu;
