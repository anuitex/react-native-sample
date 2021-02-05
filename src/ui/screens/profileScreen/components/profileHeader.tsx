import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/profileHeader';

export const ProfileHeaderComponent = (): JSX.Element => {
    const name = "Jone Doe"

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Owner</Text>
        </View>
    );
};
