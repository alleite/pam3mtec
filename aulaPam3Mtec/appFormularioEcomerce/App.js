import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [nome, setNome] = useState('');
  const [modelo, setModelo] = useState('');
  const [corLente, setCorLente] = useState('');
  const [descr, setDescr] = useState('');
  const [preco, setPreco] = useState(0);
  const [sexo, setSexo] = useState(0);
  const [limitado, setlimitado] = useState(false);

  const isWeb = typeof navigator !== "undefined" && navigator.userAgent;

  const sexos = [
    { sexoNome: 'Masculino', valor: 1 },
    { sexoNome: 'Feminino', valor: 2 }
  ];

  function enviarDados() {
    if (nome == '' || modelo == '') {
      alert('Preencha todos os dados corretamente');
      return
    }
    alert(
      'Produto cadastrado com sucesso!!\n \n' + 'Nome: ' + nome + '\n'
      + 'Modelo ' + modelo + '\n' + 'Cor da lente: ' + corLente + '\n'
      + 'Descrição: ' + descr + '\n' + 'Preço: ' + preco.toFixed(2) + '\n'
      + 'Genêro: ' + sexos[sexo].sexoNome + '\n' +
      'Produto: ' + (limitado ? 'Limitado' : 'Ilimitado') 
    )
  }

  let sexoItems = sexos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome}></Picker.Item>
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagemFundo}
          source={require("./assets/imagem_fundo.jpg")}>
          <Image style={styles.image}
            source={require("./assets/img.png")}></Image>

          <Text style={styles.Logo}>The color of Sun</Text>
          <View style={styles.areaformulario}>
            <Text style={styles.textoNome}>Nome:</Text>
            <TextInput style={styles.input}
              placeholder='Digite o nome do óculos aqui!'
              onChangeText={nome => setNome(nome)}></TextInput>

            <Text style={styles.textoNome}>Modelo:</Text>
            <TextInput style={styles.input}
              placeholder='Digite o Modelo do Óculos!'
              onChangeText={modelo => setModelo(modelo)}></TextInput>

            <View style={styles.areaSexo}>
              <Text style={styles.textoNome}>Sexo: </Text>
              <Picker
                style={styles.pickerSexo}
                selectedValue={sexo}
                onValueChange={(itemValue, itemindex) => setSexo(itemValue)}
              >
                {sexoItems}
              </Picker>
            </View>

            <Text style={styles.textoNome}>Cor da Lente:</Text>
            <TextInput style={styles.input}
              placeholder='Digite aqui a cor da lente!'
              onChangeText={corLente => setCorLente(corLente)}></TextInput>

            <Text style={styles.textoNome}>Descrição:</Text>
            <TextInput style={styles.input}
              placeholder='Digite aqui a descrição do óculos!'
              onChangeText={descr => setDescr(descr)}></TextInput>

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

                    <View style={styles.areaLimited}>
                     <Text style={styles.textoNome}>Produto limitado: </Text>
                     <Switch
                      style= {isWeb ? {transform: [{ translateY: -2}]}: {}}
                      trackColor={{ false: "#f5f5f5", true: "#008080"}}
                      thumbColor="#4682B4"
                      value ={limitado}
                      onValueChange={limitado => setlimitado(limitado)}
                     >
                     </Switch>
                    
                     <TouchableOpacity
                      style={styles.botao}
                      onPress={enviarDados}
                     >
                      <Text style={styles.botaoTexto}> Abrir conta </Text>
            
                     </TouchableOpacity>
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
  areaSexo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  pickerSexo: {
    flex: 1
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
  botao: {
    marginTop: 5,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
    borderRadius: 150,
    width: '50%'

  },
  botaoTexto: {
    color: '#f5f5f5',
    fontFamily: 'Times New Roman'
  }
});
