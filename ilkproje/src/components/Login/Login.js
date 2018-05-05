import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image 
                style={styles.logoresim}
                source={require('./Logo.png')} />
                <Text style={styles.yazi}>Hoşgeldin! Giriş Yapabilirsin.</Text>
            </View>
            <View style={styles.icerik}>
                <LoginForm />
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#3498db'
    },
    logo:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center'
    },
    logoresim:{
        width:100,
        height:100
    },
    yazi:{
        color:'white',
        marginTop:5,
        opacity:0.8
    }
  });