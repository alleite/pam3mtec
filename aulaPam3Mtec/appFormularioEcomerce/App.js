import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

const{width, height} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.imagemFundo}
      source={require("./assets/imagem_fundo.jpg")}>
         <Image style={styles.image}
      source={require("./assets/img.png")}></Image>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemFundo:{
    resizeMode:"cover",
    height: '100%',
    width: '100%',
 },
 image:{
  width: width * 0.5,
  height:width  * 0.5,
  resizeMode:"contain",
},
});
