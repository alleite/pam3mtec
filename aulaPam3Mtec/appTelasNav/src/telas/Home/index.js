import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Home({ route, navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/img/fundo.jpg")}
        style={styles.imgBg}
      >
        <View style={styles.logo}>
          <Image
            style={{ width: 320 }}
            source={require("../../../assets/img/react.png")}
          ></Image>
        </View>
        <Text style={styles.texto}>
        Bem Vindo {route.params?.nome}
        </Text>
        <View style={styles.viewBotao}>
            <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Usuario")}>
                <Text style={styles.textoBotao}> Entrar no App</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
