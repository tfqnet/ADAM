import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        padding:20,
        // paddingBottom: 50
    },
    button:{
        padding:20,
        backgroundColor:'white',
        marginVertical:6,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        color: 'black',
        fontSize:20
    },
    description:{
        marginTop:4,
        color: 'grey',
        fontSize:14
    },
    confirmButton:{
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    confirmButtonText:{
        color:'white',
        fontSize:16,
        fontWeight:'700'

    }
})