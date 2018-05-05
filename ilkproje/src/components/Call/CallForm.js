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
export default class CallForm extends Component {
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
if (this.state.eposta==''){
    this.setState({durum: 'Kendi numaranız boş olamaz.'})
}
else if (this.state.sifre==''){
    this.setState({durum: 'Aranacak numara boş olamaz.'})
}
else {
    this.setState({durum: 'Aranıyor...'})
    fetch('http://91.93.56.94:7002/Tobe/app/ApplicationServlet?jsonService=RemotePBX&serviceType=RemotePBX&usercode=webservice&password=6294d9dc7cc4040e3ecbea411f64c604f7c2e58916e1c0b1&method=originateWithVariables&extension=9a1ebb3e-188c-490d-9f4f-9793de649c7f/'+this.state.eposta+'&destination='+this.state.sifre+'&profile=53ed25f3-36b1-45f6-8ae6-34dff98fb50a&variables=AUTO-ANSWER=true,callerIdNumber=859995');
}     
}
    geri(){
        Actions.login()
    }
    render() {
      return (
        <View style={styles.container}>
         <Text style={styles.text} text>{this.state.durum}</Text>
            <TextInput
             underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(v)=>this.setState({eposta: v })} 
            placeholder="Kendi Numaranız"
            placeholderTextColor="backgroundColor:'rgba(255,255,255,0.6)"
            keyboardType="numeric"
            style={styles.input} />
            <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
             onChangeText={(v)=>this.setState({sifre: v })}  
            placeholder="Aranacak Numara"
            keyboardType="numeric"
            placeholderTextColor="backgroundColor:'rgba(255,255,255,0.6)"
            style={styles.input} />
            <MyButton onPress={this.addItem} />
            <TouchableOpacity onPress={this.geri} >
                <Text style={styles.text}>Çıkış Yap</Text>
            </TouchableOpacity>
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