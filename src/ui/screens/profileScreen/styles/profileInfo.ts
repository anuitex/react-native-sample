import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    profileInfoSection: {
        flex: 1,
        backgroundColor: '#6A26CD',
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    avatar: {
        minWidth: '100%',
        height: 300,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    title: {
        alignItems: 'center',
        marginVertical: 20
    },
    caption: {
        color: '#e6e6e6',
        fontSize: 15
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    locationText: {
        fontSize: 15,
        color: '#fff',
        marginHorizontal: 5
    },
    phone: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        color: '#37B9F1',
        fontSize: 20,
        marginLeft: 10
    },
})