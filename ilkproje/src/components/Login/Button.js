import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

export default class LoginForm extends Component {
    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.props.onPress} style={styles.buton}>
                <Text style={styles.butontext}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     padding:20
    },
    buton:{
        backgroundColor:'#2980b9',
        paddingVertical:15,
        borderRadius:25
    },
    butontext:{
        textAlign:'center',
        color:'#FFF',
        fontWeight: '700'
    }
  });
