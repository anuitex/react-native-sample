import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { styles } from '../styles';

export const SplashScreen = ({navigation}): JSX.Element => {
    const logoSource = require('../../../../../public/logo.png');
    const [run, setRun] = useState(false);
    const animationDuration = 1500;
    const runRocket = () => {
        setRun(!run)
        setTimeout(() => {
            navigation.replace('signUp')
        }, 300)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    direction="alternate"
                    animation={run ? "zoomOutUp" : "fadeInDown"}
                    duration={animationDuration}
                    source={logoSource}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay connected with everyone!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={runRocket}>
                        <Text style={styles.buttonText}>Get Started</Text>
                        <MaterialIcons name="navigate-next" color="#fff" size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};