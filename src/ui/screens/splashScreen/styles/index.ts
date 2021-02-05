import { Dimensions } from "react-native";
import {StyleSheet} from 'react-native';


const {height} = Dimensions.get("screen");
const heightLogo = height * 0.40;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6d44bd',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#6A26CD',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    logo: {
        width: heightLogo,
        height: heightLogo
    },
    button: {
        width: 120,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',
        borderRadius: 30,
        backgroundColor: '#37B9F1',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    buttonText: {
        color: '#fff'
    },
    buttonWrapper: {
        alignItems: 'flex-end',
    },
    placeholder: {
        color: '#fff'
    },
    text: {
        color: '#37B9F1',
        fontSize: 15
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pageTitle: {
        color: '#6A26CD',
        fontSize: 40,
        fontWeight: 'bold',
    }

})