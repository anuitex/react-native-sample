import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ProfileScreen } from '../../ui/screens/profileScreen';
import { SearchScreen } from '../../ui/screens/searchScreen';
import { ChatStackNavigation } from '../chatNav/chatNav';

const MaterialBottomTabs = createMaterialBottomTabNavigator();

export const MainTabsNavigation = () => {
    return (
      <MaterialBottomTabs.Navigator 
        initialRouteName="profile" 
        activeColor="#000"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad'}}
      >
        <MaterialBottomTabs.Screen
          options={{
            tabBarLabel: "chats",
            tabBarIcon: ({color}) => (
              <Ionicons name="chatbubble-sharp" color={color} size={25} />
            )
          }}
          name="chats" component={ChatStackNavigation} 
        />
        <MaterialBottomTabs.Screen
          options={{
            tabBarLabel: "profile",
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={25} />
            )
          }}
          name="profile" component={ProfileScreen} 
        />
        <MaterialBottomTabs.Screen
          options={{
            tabBarLabel: "search",
            tabBarIcon: ({color}) => (
              <Ionicons name="search" color={color} size={25} />
            )
          }}
          name="search" component={SearchScreen} 
        />
      </MaterialBottomTabs.Navigator>
    )
  }