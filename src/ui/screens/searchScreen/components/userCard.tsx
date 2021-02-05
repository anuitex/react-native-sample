import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import {Caption} from 'react-native-paper';
import { getRandomColor } from '../../../../helpers/utils';
import {styles} from '../styles/userCard';


export const UserCardComponent = ({user}) => {
    return (
        <TouchableOpacity>
            <View style={styles.userContainer}>
                <View>
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
                <View>
                    <Text>
                        {user.name}
                    </Text>
                    <Caption>{user.userName}</Caption>
                </View>
            </View>
        </TouchableOpacity>
    );
};