import React from 'react';
import { SafeAreaView } from 'react-native';
import { ProfileHeaderContainer } from '../containers/profileHeaderContainer';
import { ProfileInfoContainer } from '../containers/profileInfoContainer';

export const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#6d44bd'}}>
            <ProfileHeaderContainer />
            <ProfileInfoContainer />
        </SafeAreaView>
    )
}
