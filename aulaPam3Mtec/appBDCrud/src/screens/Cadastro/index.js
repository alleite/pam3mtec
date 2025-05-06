import React, { useState, useEffect } from 'react';
import { ScrollView,Alert, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import {  useNavigation } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";

import api from '../../../services/api';



const Cadastro = FC= () => { 

    const navigation=  any= useNavigation();
    

    const [cidade, setCidade] = useState("");   
    const [estado, setEstado] = useState("");   
    const [transporte, setTransporte] = useState("");       
    const [sucess, setSucess] = useState(false);
    const [loading, setLoading] = useState(false);
            
    
   function limparCampos(){
    
    setCidade('');
    setEstado('');
    setTransporte('');
   
}




   async function saveData() {            
        
           if (cidade == "" || estado == "" || transporte == "") {
            showMessage({
                message: "Erro ao Salvar",
                description: 'Preencha os Campos Obrigatórios!',
                type: "warning",
            });
            return;
        }
        
        
        try {
            const obj = {
            
                cidade: cidade, 
                estado: estado,               
                transporte: transporte,       
            }

            const res = await api.post('appBD/salvar.php', obj);

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
        <View style={{ flex: 1, marginTop: 0, backgroundColor: '#0f4571', }}>
            <View style={styles.Header}>
                 <Image style={styles.logo} source={require('../../../assets/logo2.png')} />         
          <TouchableOpacity
              onPress={ () =>  navigation.navigate("Home")}
              
          >
           <Ionicons style={{marginLeft:5, marginRight:5}} name="caret-back-outline" size={35} color="#FFF"></Ionicons>
          </TouchableOpacity>
                           
            </View>

            <View style={styles.Title}>

                     <Ionicons name="airplane-outline" size={35} color="#ffffff" />
                        <Text style={styles.TitleText}>Turismo</Text>
                    </View>

            <ScrollView>   
            <View>  

                <Text style={styles.TitleInputs}>Cidade:</Text>

                <TextInput               
                    placeholder="Digite a cidade de destino"
                    onChangeText={(text) => setCidade(text)}
                    value={cidade}
                    style={styles.TextInput}
                />
            </View>


            <View>
                <Text style={styles.TitleInputs}>Estado:</Text>
                <TextInput
                    placeholder="Digite o estado"
                    onChangeText={(text) => setEstado(text)}
                    value={estado}
                    style={styles.TextInput}
                   
                />
            </View>

          
            <View>

                <Text style={styles.TitleInputs}>Transporte:</Text>

                <TextInput
                    placeholder="Digite o meio de transporte"
                    onChangeText={(text) => setTransporte(text)}
                    value={transporte}
                    style={styles.TextInput}
                   
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
                     <Ionicons name="footsteps-outline" size={35} color="#FFF" />
                    <Text style={styles.ButtonText}>Salvar</Text>
                </TouchableOpacity>
              </ScrollView>                 

        </View>
    );
}

export default Cadastro;