import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    TextInput:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: '90%',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#009ddd',
        height: 45,
    },

    TextInputArea:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: '90%',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 90,
    },

    Picker:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: '90%',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 45,
    },

    PickerRow:{
        borderWidth: 0.5,
        borderColor: '#000',
        width: 140,
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        backgroundColor: '#fff',
        height: 45,
    },

    Button:{
        backgroundColor: '#386dbd',
        width: '60%',
        alignSelf: "center",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        height: 60
    },

    ButtonText:{
        fontSize: 20,
        color: '#fff',
      
    },

    TitleInputs:{
 
        fontSize: 18,
        color: "#ffffff",
        marginLeft: 35,
        marginTop: 15,
        marginBottom: 10,
    },
    
    TitleInputsRow:{
    
        fontSize: 18,
        color: "#000",
        marginLeft: 13,
        marginTop: 15,
    },

    BackButton:{
     
        position: 'absolute',
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        top: -3,
    },

    BackButtonText:{
     
        fontSize: 18,
        color: 'gray',
        marginLeft: 5,
        marginBottom: 10,
        alignSelf: "center",
    },

    SexoAndCivil:{
        flexDirection: 'row',
        alignSelf: "center",
    },

    Title:{
        alignSelf: "center",
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },

    TitleText:{
        marginTop: 10,
        fontSize: 20,
        color: '#ffffff',
    },

    Header:{
        borderBottomWidth: 0.6,
        borderBottomColor: '#c1c1c1',
        paddingBottom: 0,
        marginBottom: 7,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pickDate:{
        backgroundColor: '#fff',
        padding: 10,
        width: '90%',
        borderRadius: 5,
        alignItems: "center",    
        borderColor: '#000',
        borderWidth: 0.5,
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        flexDirection: 'row',
        height: 45,
        marginBottom: 5,
      },

      date:{

        fontSize: 15,
        color: '#000',
        alignSelf: "center",
      },

      logo:{
        width: '100%',
        height: 130,
        alignSelf: "center",
        marginTop: 20,
    },
    radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOuter: {
    borderColor: '#007AFF',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
})