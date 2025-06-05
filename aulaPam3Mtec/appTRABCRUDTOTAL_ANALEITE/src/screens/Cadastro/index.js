import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { showMessage, hideMessage } from "react-native-flash-message";

import api from "../../../services/api";

const Cadastro = (FC = ({ route }) => {
  const { id } = route.params;
  const navigation = (any = useNavigation());

  const [nome, setNome] = useState("");
  const [habitat, setHabitat] = useState("");
  const [porte, setPorte] = useState("");
  const [flores, setFlores] = useState("");
  const [frutifera, setFrutifera] = useState('Sim');
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);

  function limparCampos() {
    setNome("");
    setHabitat("");
    setPorte("");
    setFlores("");
    setFrutifera("");
  }

  async function buscardados() {
    const res = await api.get("appPlanta/buscarId.php?id=" + id);
    setNome(res.data.nome);
    setHabitat(res.data.habitat);
    setPorte(res.data.porte);
    setFlores(res.data.flores);
    setFrutifera(res.data.frutifera);
  }

  const RadioButton = ({ label, selected, onPress }) => (
  <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
    <View style={[styles.outerCircle, selected && styles.selectedOuter]}>
      {selected && <View style={styles.innerCircle} />}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

  useEffect(() => {
    if (id) {
      buscardados();
    }
  }, [id]);

  async function editar() {
    if (nome == "" || habitat == "" || porte == "" || flores == "" || frutifera == "") {
      showMessage({
        message: "Erro ao Editar",
        description: "Preencha os Campos Obrigatórios!",
        type: "warning",
      });
      return;
    }

    try {
      const obj = {
        id: id,
        nome: nome,
        habitat: habitat,
        porte: porte,
        flores: flores,
        frutifera: frutifera
      };

      const res = await api.post("appPlanta/editar.php", obj);

      if (res.data.sucesso === false) {
        showMessage({
          message: "Erro ao Editar",
          description: res.data.mensagem,
          type: "warning",
          duration: 3000,
        });
        return;
      }

      setSucess(true);
      showMessage({
        message: "Registro alterado com Sucesso",
        description: "Registro Alterado",
        type: "success",
        duration: 800,
      });
      limparCampos();
    } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
      setSucess(false);
    }
  }

  async function saveData() {
    if (nome == "" || habitat == "" || porte == "" || flores == "" || frutifera == "") {
      showMessage({
        message: "Erro ao Salvar",
        description: "Preencha os Campos Obrigatórios!",
        type: "warning",
      });
      return;
    }

    try {
      const obj = {
        nome: nome,
        habitat: habitat,
        porte: porte,
        flores: flores,
        frutifera: frutifera
      };

      const res = await api.post("appPlanta/salvar.php", obj);

      if (res.data.sucesso === false) {
        showMessage({
          message: "Erro ao Salvar",
          description: res.data.mensagem,
          type: "warning",
          duration: 3000,
        });
        limparCampos();
        return;
      }

      setSucess(true);
      showMessage({
        message: "Salvo com Sucesso",
        description: "Registro Salvo",
        type: "success",
        duration: 800,
      });
    } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
      setSucess(false);
    }
  }

  return (
    <View style={{ flex: 1, marginTop: 0, backgroundColor: "#f5f5f5" }}>
      <View style={styles.Header}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo2.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons
            style={{ marginLeft: 5, marginRight: 5 }}
            name="caret-back-outline"
            size={35}
            color="#000"
          ></Ionicons>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          <Text style={styles.TitleInputs}>Nome:</Text>

          <TextInput
            placeholder="Digite o nome da planta:"
            onChangeText={(text) => setNome(text)}
            value={nome}
            style={styles.TextInput}
          />
        </View>

        <View>
          <Text style={styles.TitleInputs}>Em qual habitat ela vive:</Text>
          <TextInput
            placeholder="Digite o habitat"
            onChangeText={(text) => setHabitat(text)}
            value={habitat}
            style={styles.TextInput}
          />
        </View>

        <View>
          <Text style={styles.TitleInputs}>Qual é o seu porte:</Text>

          <TextInput
            placeholder="Digite o seu porte:"
            onChangeText={(text) => setPorte(text)}
            value={porte}
            style={styles.TextInput}
          />
        </View>
        <View>
          <Text style={styles.TitleInputs}>Ela possue flores?</Text>

          <TextInput
            placeholder="S ou N"
            onChangeText={(text) => setFlores(text)}
            value={flores}
            style={styles.TextInput}
          />
        </View>
        <View>
          <Text style={styles.TitleInputs}>É frutífera?</Text>

          <RadioButton
        label="Sim"
        selected={frutifera === 'Sim'}
        onPress={() => setFrutifera('Sim')}
      />
      <RadioButton
        label="Não"
        selected={frutifera === 'Não'}
        onPress={() => setFrutifera('Não')}
      />
        </View>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            //setSucess(true);
            saveData();
            // setSucess(false);
          }}
        >
          <Text style={styles.ButtonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            setSucess(true);
            editar();
            setSucess(false);
          }}
        >
          <Text style={styles.ButtonText}>Editar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
});

export default Cadastro;
