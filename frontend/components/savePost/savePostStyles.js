import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 30,
        backgroundColor: 'white',
    },
    spacer:{
        flex: 1,
    },
    inputText: {
        paddingVertical: 10,
        marginRight: 20,
        flex:1
    },
    formContainer:{
        margin: 20,
        flexDirection: 'row',
    },
    mediaPreview:{
        aspectRatio: 9/16,
        backgroundColor: 'black',
        width: 60
    },
    buttonContainer:{
        flexDirection: 'row',
        margin: 20
    },
    cancelButton:{
        alignItems: 'center',
        flex: 1,
        borderColor: 'lightgrey',
        borderWidth: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10,
    },
    postButton:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10,
    },
    cancelButtonText:{
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16
    },
    postButtonText:{
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
});

export default styles;