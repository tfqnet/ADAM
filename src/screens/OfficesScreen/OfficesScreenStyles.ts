import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1,
        padding:20
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
        color: 'grey',
        fontSize:20
    }
})