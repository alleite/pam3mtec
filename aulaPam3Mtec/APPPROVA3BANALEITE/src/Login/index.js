import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, Animated, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [opac] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opac, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/img/fundo.jpg')}
        style={styles.imgBg}
        resizeMode="cover"
      >
        <KeyboardAvoidingView style={styles.background}>
          <View style={styles.logo}>
            <Image
              style={{ width: 200, height: 100 }}
              resizeMode="contain"
              source={require('../../assets/img/react.png')}
            />
          </View>

          <Animated.View
            style={[
              styles.formulario,
              {
                opacity: opac,
                transform: [{ translateY: offset.y }],
              },
            ]}
          >
            <TextInput style={styles.input} placeholder="Usuário" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

            <View style={styles.viewBotao}>
              <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Produtos')}>
                <Text style={styles.textoBotao}>Entrar</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botaoRecuperar}>
              <Text style={styles.textoRecuperar}>Clique no Botão Entrar</Text>
            </TouchableOpacity>
          </Animated.View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  formulario: {
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#000', 
    borderRadius: 10,
    padding: 20,
  },

  input: {
    backgroundColor: '#FFF',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    width: '90%',
  },

  viewBotao: {
    width: '90%',
    borderRadius: 7,
  },

  botao: {
    backgroundColor: '#1a7487',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
  },

  botaoRecuperar: {
    marginTop: 15,
  },

  textoRecuperar: {
    color: '#FFF',
  },

  imgBg: {
    position: 'absolute', 
    width: width,
    height: height,
  },
});
