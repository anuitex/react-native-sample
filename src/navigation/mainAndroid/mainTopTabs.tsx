import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { ProfileScreen } from '../../ui/screens/profileScreen';
import { SearchScreen } from '../../ui/screens/searchScreen';
import { ChatsListScreen } from '../../ui/screens/chatsScreen';


const tabScreens = [
    {
        name: "chats",
        component: ChatsListScreen
    },
    {
        name: "profile",
        component: ProfileScreen
    },
    {
        name: "search",
        component: SearchScreen
    },
];

const MaterialTopTabs  = createMaterialTopTabNavigator();
const tabSize = Dimensions.get('window').width / tabScreens.length;

export const MainTopTabsNavigation = () => {
    return (
        <MaterialTopTabs.Navigator 
            lazy={true}
            tabBarOptions={{
                labelStyle: { fontSize: 12, fontWeight: 'bold' },
                tabStyle: { width: tabSize},
                style: { backgroundColor: '#694fad', paddingTop: 40},
              }}
        >
            {
                tabScreens.map((tab) => (
                    <MaterialTopTabs.Screen name={tab.name} component={tab.component}/>
                ))
            }
        </MaterialTopTabs.Navigator>
    )
}

