import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { UserCardContainer } from '../containers/userCardContainer';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { ResponseUserModel } from '../../../../shared/models/response/responseUser.model';


interface SearchListProps {
    users: any;
}

export const SearchListComponent = ({users}: SearchListProps) => {
    const image = require('../../../../../public/user.png');
    const [usersState, setUsersState] = useState([]);

    useEffect(() => {
        users && setUsersState(users);
    })

   if(users) {
        return (
            <Animatable.View 
                animation="fadeInUpBig" 
                duration={1000} 
                style={{flex: 4, backgroundColor: '#6A26CD', borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingHorizontal: 30, paddingTop: 5}}>
                <SafeAreaView style={{paddingTop: 20}}>
                    <FlatList 
                        data={users}
                        keyExtractor={(item: ResponseUserModel) => item.id}
                        renderItem={({item}) => (
                            <UserCardContainer key={item.id} user={item} />
                        )}
                    />
                </SafeAreaView>
            </Animatable.View>
        );
   }
   return (
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Animatable.Image animation="bounceIn" duration={1000} source={image} style={styles.image} />
       </View>
   );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300
    }
})