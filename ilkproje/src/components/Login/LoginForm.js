import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import MyButton from './Button';
import {Actions} from 'react-native-router-flux';
export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.addItem=this.addItem.bind(this);
    }
    state ={
        eposta: '',
        sifre: '',
        durum: '',
    }
    addItem(){
        //console.warn(this.state.eposta+this.state.sifre)
        
        if (this.state.eposta==''){
            this.setState({durum: 'E-mail alanı boş olamaz.'})
        }
        else if (this.state.sifre==''){
            this.setState({durum: 'Şifre alanı boş olamaz.'})
        }
        else {
            this.setState({durum: 'Yönlendiriliyorsunuz...'})
            Actions.ara()
        }        
    }
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.text} text>{this.state.durum}</Text>
            <TextInput
             underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(v)=>this.setState({eposta: v })} 
            placeholder="E-Postanizi Girin."
            placeholderTextColor="backgroundColor:'rgba(255,255,255,0.6)"
            keyboardType="email-address"
            style={styles.input} />
            <TextInput
             underlineColorAndroid='rgba(0,0,0,0)'
             onChangeText={(v)=>this.setState({sifre: v })}  
            placeholder="Sifrenizi Girin."
            placeholderTextColor="backgroundColor:'rgba(255,255,255,0.6)"
            secureTextEntry
            style={styles.input} />
            <MyButton onPress={this.addItem} />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     padding:20
    },
    input: {
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        color: '#FFF',
        paddingHorizontal:6,
        borderRadius:25
    },
    text: {
        textAlign:'center',
        color:'#FFF',
    }
  });
