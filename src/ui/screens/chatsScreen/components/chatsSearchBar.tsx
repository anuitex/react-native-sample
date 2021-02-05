import React, { useState } from 'react';
import {
    Text,
    View,
    Platform
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { styles } from '../styles/chatsSearchBar';



export const ChatsSearchBarComponent = (): JSX.Element => {
    const [value, setValue] = useState("");
    const searchHandler = (val: string) => {
        setValue(val);
    };
    return (
        <View style={styles.header}>
            <SearchBar
                placeholder="Type here..."
                value={value}
                onChangeText={(val) => searchHandler(val)}
                platform={Platform.OS === 'android' ? 'android' : 'ios'}
                showLoading
                containerStyle={{
                    backgroundColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent',
                    flex: 1
                  }}
                  inputContainerStyle={{
                    backgroundColor: '#EDEDED'
                  }}
                  inputStyle={{
                    backgroundColor: '#EDEDED',
                    borderRadius: 10,
                    color: 'black'
                  }}
            />
        </View>
    );
};