import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Caption} from 'react-native-paper';
import { Avatar, Badge } from 'react-native-elements';
import { formatDate, getRandomColor } from '../../../../helpers/utils';
import { styles } from '../styles/chatCard';
import { useNavigation } from '@react-navigation/native'

interface chatCardProps {
    message: {
        id: number;
        text: string;
        createdAt: Date;
        user: {
            id: number;
            name: string;
            avatar: string;
            isOnline: boolean;
        }
    }
}
export default (props: chatCardProps) => {
    const navigation = useNavigation()
    const maxlimit = 40;
    const {message: chat} = props;
    const {text, createdAt, user} = chat;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('chatRoom', chat)}>
            <View style={styles.userContainer}>
                <View style={{flex: 1}}>
                    <Avatar 
                        source={{uri: user.avatar}}
                        containerStyle={[styles.avatar, {backgroundColor: getRandomColor()}]}
                        rounded
                        size={70}
                        title={user.name[0]}
                    />
                    <Badge
                        status={user.isOnline ? "success" : "warning"}
                        containerStyle={{ position: 'absolute', top: 8, right: 20 }}
                        badgeStyle={{width: 10, height: 10, borderRadius: 10 / 2}}
                    />
                </View>
                <View style={{flex: 3}}>
                    <View style={styles.chatHeader}>
                        <Text style={styles.name}>
                            {user.name}
                        </Text>
                        <Caption>
                            {formatDate(createdAt)}
                        </Caption>
                    </View>
                    <Caption style={styles.message}>
                    { 
                        text.length > maxlimit
                        ? text.substring(0, maxlimit-3) + '...' 
                        : text 
                    }
                    </Caption>
                </View>
            </View>
        </TouchableOpacity>
    );
};