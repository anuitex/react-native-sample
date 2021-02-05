import React from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView } from 'react-native';
import { ChatCardContainer } from '../containers/chatCardContainer';
import { styles } from '../styles/chatList';
import { ResponseOwnerDataModel } from '../../../../shared/models/response/responseOwnerData.model';
import { useNavigation } from '@react-navigation/native';

interface ChatsListProps {
    owner: ResponseOwnerDataModel;
}

export const ChatsListComponent = ({owner}: ChatsListProps): JSX.Element=> {

    const {chats} = owner;
    const navigation = useNavigation()
    return (
        <Animatable.View animation="fadeInUpBig" duration={1000} style={styles.footer}>
            <SafeAreaView >
                <FlatList 
                    data={chats}
                    keyExtractor={(item) => item.chatId.toString()}
                    renderItem={({item, index}) => (
                        <ChatCardContainer  key={item.chatId + index} navigation={navigation} chat={item} />
                    )}
                />
            </SafeAreaView >
        </Animatable.View>
    );
};