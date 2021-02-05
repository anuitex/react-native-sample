import {
    StyleSheet,
} from 'react-native';

export const regStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6d44bd'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 30
    },
    headerText: {
        fontSize: 30,
        color: '#37B9F1',
        fontWeight: 'bold'
    },
    footer: {
        flex: 5,
        paddingHorizontal: 30,
        paddingVertical: 30,
        backgroundColor: '#6A26CD',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    footerText: {
        color: '#fff',
        marginBottom: 10
    },
    action: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 20
    },
    input: {
        marginLeft: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        flex: 1,
        color: '#fff'
    },
    inputWrapper: {
        marginBottom: 40
    },
    button: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#37B9F1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20
    },
    signIn: {
        backgroundColor: '#6A26CD',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
    }

})