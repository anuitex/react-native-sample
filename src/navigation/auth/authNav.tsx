import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RegPage } from '../../ui/screens/authorization';
import { LoginPage } from '../../ui/screens/login';
import { SplashPage } from '../../ui/screens/splashScreen';


const Stack = createStackNavigator();

export const AuthStackNavigation = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="splash" component={SplashPage} />
            <Stack.Screen name="signUp" component={RegPage} />
            <Stack.Screen name="signIn" component={LoginPage} />
        </Stack.Navigator>
    )
}