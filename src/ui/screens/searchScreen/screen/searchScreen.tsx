import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBarContainer } from '../containers/searchBarContainer';
import { SearchListContainer } from '../containers/searchListContainer';



export const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <SearchBarContainer/>
            <SearchListContainer/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6d44bd',
    }
})