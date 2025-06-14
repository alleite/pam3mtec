import React, { useEffect, useState } from "react";
import { styles } from "./style";

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Load from "../../components/Load";
import { DrawerActions, useNavigation } from "@react-navigation/core";
import api from "../../../services/api";

import { useIsFocused } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [dados, setDados] = useState([]);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [nome, setNome] = useState([]);
  const [habitat, setHabitat] = useState([]);
  const [porte, setPorte] = useState([]);
  const [flores, setFlores] = useState([]);
  const [frutifera, setFrutifera] = useState('Sim');
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function totalDadosCadastrados() {
    const res = await api.get(`appPlanta/listar-cards.php`);
    setTotal(res.data);
  }

  async function getItem(id) {
    navigation.navigate("Cadastro", { id: id });
  }

  function mensagemDelete(id) {
    Alert.alert(
      "Excluir Registro",
      "Deseja Excluir este Registro?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sim", onPress: () => deleteItem(id) },
      ],
      { cancelable: true }
    );
  }

  async function deleteItem(id) {
    const res = await api.get("appPlanta/excluir.php?id=" + id);
    listarDados();
  }
 async function listarDados() {
  try {
    const res = await api.get(`appPlanta/buscar.php`);
    console.log("Resposta da API:", res.data); // <-- Adicione isto
    setDados(Array.isArray(res.data.result) ? res.data.result : []);
  } catch (error) {
    console.log("Erro ao Listar " + error);
    setDados([]);
  } finally {
    setIsLoading(false);
    setRefreshing(false);
  }
}

  useEffect(() => {
    listarDados();
    totalDadosCadastrados();
  }, [isFocused]);

  const onRefresh = () => {
    setRefreshing(true);
    listarDados();
  };

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.containerHeader}>
            <TouchableOpacity
              style={styles.menu}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <MaterialIcons name="menu" size={35} color="black" />
            </TouchableOpacity>

            <Image
              style={styles.logo}
              source={require("../../../assets/logo2.png")}
            />
          </View>
        </View>

        {isLoading ? (
          <Load />
        ) : (
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.containerBox}>
              <TouchableOpacity onPress={() => navigation.navigate("Cadastro", { id: 0 })}>
                <View>
                  <View style={styles.box}>
                    <View style={styles.textos}>
                      <Text style={styles.rText}>Total de Registros</Text>
                      <Text style={styles.lenghtText}>
                        {total.total_usuarios}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.textFooter}>Dados Cadastrados</Text>
                </View>
              </TouchableOpacity>
            </View>

            {dados.map((item) => (
              <View style={styles.griditem} key={item.id}>
                <Text style={{ color: "#585858" }}>
                  {item.id} - {item.nome} - {item.habitat} - {item.porte} - {item.flores} - {item.frutifera}
                </Text>
                <TouchableOpacity
                  style={styles.gridbotaoEditar}
                  onPress={() => getItem(item.id)}
                >
                  <Ionicons
                    name="create-outline"
                    size={30}
                    color="#50b9e1"
                  ></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.gridbotaoExcluir}
                  onPress={() => mensagemDelete(item.id)}
                >
                  <Ionicons
                    name="trash-outline"
                    size={30}
                    color="#e15f50"
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
