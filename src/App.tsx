import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootNavigation } from './navigation/rootNavigation';
import {Provider} from 'react-redux';
import { appStore } from './appStore';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={appStore}>
      <NavigationContainer theme={DarkTheme}>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}