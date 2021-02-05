import {StyleSheet, Dimensions} from 'react-native';


const screenWidth = Dimensions.get("window").width;
const listPaddings = 15;
export const styles = StyleSheet.create({
    avatar: {
        marginRight: 15,
    },
    userContainer: {
        maxWidth: screenWidth - listPaddings,
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#6d44bd',
        borderRadius: 50,
        padding: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        elevation: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 50
    },
    message: {
        color: 'grey',
        fontSize: 15,
        width: 200
    },
    chatHeader: {
        flexDirection: 'row',
    }
})