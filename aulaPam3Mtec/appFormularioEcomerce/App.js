import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

const{width, height} = Dimensions.get('window');

export default function App() {
  const [nome, setNome] = useState('');
  const [modelo, setModelo] = useState('');
  const [corLente, setCorLente] =  useState('');
  const [descr, setDescr] = useState('');
  const [preco, setPreco] = useState(0);

  const isWeb = typeof navigator !== "undefined" && navigator.userAgent;

  function enviarDados(){
    if(nome == '' || telefone == '')
    {
      alert('Preencha todos os dados corretamente');
      return
    }
    alert(
      'Conta aberta com sucesso!!\n \n' + 'Nome: ' + nome + '\n' + 'Telefone: ' + telefone + '\n' + 'Sexo: ' + sexos[sexo].sexoNome + '\n'
      + 'Limite Conta: ' + limite.toFixed(2) + '\n' + 'Conta Estudante: ' + (estudante ? 'Ativo' : 'Inativo')
    )
  }

  let sexoItems = sexos.map ((v , k) => {
    return <Picker.Item key={k} value={k} label={v.sexoNome}></Picker.Item>
  })

  return (
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
        placeholder='Digite o nome do produto aqui!'
        onChangeText={nome=> setNome(nome)}></TextInput>
        
        <Text style={styles.textoNome}>Modelo:</Text>
        <TextInput style={styles.input}
              placeholder='Digite o Modelo do Óculos!'
              onChangeText={modelo=> setModelo(modelo)}></TextInput>

        <Text style={styles.textoNome}>Cor da Lente:</Text>
        <TextInput style={styles.input}
              placeholder='Digite aqui a cor da lente!'
              onChangeText={corLente=> setCorLente(corLente)}></TextInput>

        <View style={styles.areaEstudante}> 
          <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}
          >
            <Text style={styles.botaoTexto}> Abrir Conta </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
  },
  imagemFundo:{
    resizeMode:"cover",
    alignItems: "center",
    height: '100%',
    width: '100%',
 },
 image:{
  width: width * 0.4,
  height:width  * 0.4,
  resizeMode:"contain",
},
areaformulario:
{
  width: '90%',
  flexDirection: 'column',
  margin: 10,
  gap: 25
},
textoNome:{
  fontSize: 17,
  color: '#000000',
  fontWeight: 'bold',
},
Logo:{
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 'bold',
  color: '#000000'
},
areaSexo:{
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 5
},
pickerSexo:{
flex:1
},
limiteArea:{
flexDirection:'row',
paddingBottom: 5,
},
limiteTexto:{
color: '#FF0000',
fontSize: 17,
fontWeight: 'bold',
paddingLeft: 5,
},
areaEstudante:{
alignItems: 'center',
justifyContent: 'center',

},
botao:{
height: 35,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#000000',
borderRadius: 150,
width: '50%'

},
});
