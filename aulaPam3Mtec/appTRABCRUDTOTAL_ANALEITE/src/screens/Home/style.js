import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        
        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 75,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 10,
    },

    logo:{
        width: 160,
        height: 60,
        alignSelf: "center",
        marginTop: 0,
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        top: 15,
    },

    titleTasks:{
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting:{
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName:{
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image:{
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText:{
        color: 'pink', 
        fontSize: 35, 
        fontFamily: fonts.text,
    },

    tasks:{
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground:{
        backgroundColor: '#333333'
    },

    tasksText:{
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout:{
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox:{
        width: '85%',
        alignSelf: "center",
        marginBottom: 25,
    },

    box:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
        
    },

    rText:{
        fontSize: 20,
        color: 'grey',
        fontFamily: fonts.text,
    },

    textFooter:{
        borderTopColor: '#ccc',
        paddingTop: 15, 
        paddingBottom: 10, 
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#9370DB',
        textAlign: 'center',
        fontSize: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontFamily: fonts.text,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer:{
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    },
    grid:{
        marginTop: 8,
        
      },
    
      griditem:{
        padding: 11,
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: StyleSheet.hairlineWidth
      },
    
       gridbotaoEditar:{
         position: 'absolute',
         right:40,
         color:'#5c7ef6',
       },
    
       gridbotaoExcluir:{
         position: 'absolute',
         right:15,
         color:'#cc1414',
       },
    
})