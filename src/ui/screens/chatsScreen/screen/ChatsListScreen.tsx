import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { ChatSearchBarContainer } from '../containers/chatSearchBarContainer';
import { ChatsListContainer } from '../containers/chatListContainer';

export const ChatsListScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <ChatSearchBarContainer />
            <ChatsListContainer/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6d44bd'
    }
})