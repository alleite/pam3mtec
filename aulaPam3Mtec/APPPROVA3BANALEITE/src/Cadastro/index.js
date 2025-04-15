import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';

import Slider from '@react-native-community/slider';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [nome, setNome] = useState('');
  const [texto, setTexto] = useState('');
  const [preco, setPreco] = useState(0);

  const isWeb = typeof navigator !== "undefined" && navigator.userAgent;

  function enviarDados() {
    if (nome == '' || texto == '') {
      alert('Preencha todos os dados corretamente');
      return
    }
    alert(
      'Produto cadastrado com sucesso!!\n \n' + 'Nome: ' + nome + '\n'
      + 'Descrição: ' + texto + '\n' + 'Preço: ' + preco.toFixed(2) 
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagemFundo}
          source={require("../../assets/img/fundo3.jpg")}>
          <Text style={styles.Logo}>Cadastro de Novos Produtos</Text>
          <View style={styles.areaformulario}>
            <Text style={styles.textoNome}>Nome:</Text>
            <TextInput style={styles.input}
              placeholder='Digite o nome do produto aqui!'
              onChangeText={nome => setNome(nome)}></TextInput>

            <Text style={styles.textoNome}>Descrição:</Text>
            <TextInput style={styles.input}
              placeholder='Digite aqui a descrição do produto!'
              onChangeText={texto => setTexto(texto)}></TextInput>

            <View style={styles.limiteArea}>
              <Text style={styles.textoNome}>Preço: </Text>
              <Text style={styles.limiteTexto}>R${preco.toFixed(0)}</Text>
            </View>

            <View style={styles.areaSlider}>
              <Slider
                minimumTrackTintColor='#f5f5f5'
                minimumValue={50}
                maximumValue={4000}
                value={preco}
                onValueChange={(preco) => setPreco(preco)}
              >
              </Slider>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
  },
  imagemFundo: {
    resizeMode: "cover",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
  },
  areaformulario:
  {
    width: '90%',
    flexDirection: 'column',
    margin: 10,
    gap: 25
  },
  textoNome: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  Logo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily:'Times New Roman',
    color: '#000000'
  },
  limiteArea: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  limiteTexto: {
    color: '#f5f5f5 ',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaLimited: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  botaoTexto: {
    color: '#f5f5f5',
    fontFamily: 'Times New Roman'
  }
});
