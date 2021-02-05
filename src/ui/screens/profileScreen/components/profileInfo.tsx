import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Caption } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native-elements';
import { styles } from '../styles/profileInfo';
import { ResponseOwnerDataModel } from '../../../../shared/models/response/responseOwnerData.model';

interface ProfileInfoProps {
    owner: ResponseOwnerDataModel
}

export const ProfileInfoComponent = ({owner}: ProfileInfoProps): JSX.Element => {
    const {name, phone,} = owner; // avatar, username

    return (
        <SafeAreaView style={styles.profileInfoSection}>
            <View>
                <Image 
                    source={{uri: 'http://placeimg.com/640/480/people'}}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.title}>
                <Text style={styles.text}>{name}</Text>
                <Caption style={styles.caption}>@J_doe</Caption>
            </View>
            <View style={styles.location}>
                <Entypo name="location" color="#fff" size={20} />
                <Text style={styles.locationText}>New York, USA</Text>
            </View>
            <View style={styles.phone}>
                <FontAwesome name="phone" color='#37B9F1' size={20} />
                <Text style={styles.number}>
                   { !phone && "+380(99) 123 456 7"}
                </Text>
            </View>
        </SafeAreaView>
    );
}