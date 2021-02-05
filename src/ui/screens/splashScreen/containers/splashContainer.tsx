import React from 'react';
import { SplashScreen } from '../components/splashScreenComponent';

interface RegContainerProps {
    navigation: any
}

export const SplashScreenContainer = ({navigation}: RegContainerProps): JSX.Element => {
    return (
        <SplashScreen navigation={navigation} />
    );
};