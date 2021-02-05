import React from 'react';
import { Platform } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigation } from './auth/authNav';
import { MainTopTabsNavigation } from './mainAndroid/mainTopTabs';
import { MainTabsNavigation } from './mainIOS/mainTabsNav';



const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="auth" component={AuthStackNavigation} />
        {Platform.OS === "android" 
         ? <Stack.Screen name="main" component={MainTopTabsNavigation} />
         : <Stack.Screen name="main" component={MainTabsNavigation} />
        }
      </Stack.Navigator>
  );
}