import React, { useCallback, useEffect, useState } from 'react';
import {
    Text,
    View,
    TextInput as Input,
    StyleSheet,
    Platform,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import { regStyles } from '../styles';
import { registrAction } from '../store/actions';
import { AppState } from '../../../../appStore';
import { NavigationInjectedProps } from 'react-navigation';

interface RegFormProps extends NavigationInjectedProps {
    navigation: any;
    status: boolean;
}

interface body {
    name: string;
    email: string;
    password: string;
}

export const RegFormComponent = ({navigation, status}: RegFormProps): JSX.Element => {
    const dispatch = useDispatch();

    const [inputState, setInputState] = useState({
        name: "", email: "", password: "", 
        checkTextInputChange: false,
        secureTextEntry: true
    });
    
    useEffect(() => {
        status && navigation.replace('signIn');
    }, [status]);

    const emailInputChange = (val: string) => {
        if(val.length !== 0) {
            setInputState({
                ...inputState,
                email: val,
                checkTextInputChange: true
            })
        } else {
            setInputState({
                ...inputState,
                email: val,
                checkTextInputChange: false
            })
        }

    }

    const changeSecureTextEntry = () => {
        setInputState({
            ...inputState,
            secureTextEntry: !inputState.secureTextEntry
        })
    }

    const submitHandler = (body: body) => {
        dispatch(registrAction(body))
    }
    
    return (
        <View style={regStyles.container}>
            <View style={regStyles.header}>
                <Text style={regStyles.headerText}>Register now!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" duration={1000} style={regStyles.footer}>
                <View style={regStyles.inputWrapper}>
                    <Text style={regStyles.footerText}>name</Text>
                    <View style={regStyles.action}>
                        <FontAwesome name="user" color="#fff" size={20} />
                        <Input 
                            onChangeText={(val: string) => setInputState({...inputState, name: val})} 
                            value={inputState.name} 
                            style={regStyles.input} 
                            placeholder="your name" 
                            placeholderTextColor="#fff"
                        />
                    </View>

                    <Text style={regStyles.footerText}>Email</Text>
                    <View style={regStyles.action}>
                        <FontAwesome name="envelope" color="#fff" size={20} />
                        <Input 
                            value={inputState.email}
                            onChangeText={(val: string) => emailInputChange(val)}
                            style={regStyles.input} 
                            keyboardType={'email-address'} 
                            placeholder="your email" 
                            placeholderTextColor="#fff" 
                            autoCapitalize='none'
                        />
                        {inputState.checkTextInputChange ?
                         <Feather name="check-circle" color="green" size={20} />
                         : null}
                    </View>

                    <Text style={regStyles.footerText}>Password</Text>
                    <View style={regStyles.action}>
                        <FontAwesome name="lock" color="#fff" size={20} />
                        <Input 
                            onChangeText={(val: string) => setInputState({...inputState, password: val})}    
                            value={inputState.password} 
                            style={regStyles.input} 
                            placeholder="your password" 
                            placeholderTextColor="#fff"
                            secureTextEntry={inputState.secureTextEntry ? true : false}
                        />
                        <TouchableOpacity onPress={changeSecureTextEntry}>
                            <Feather name={inputState.secureTextEntry ? "eye-off" : "eye"} color="grey" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => submitHandler(inputState)} style={[regStyles.button, {marginBottom: 10}]}>
                    <Text style={regStyles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace('signIn')} style={regStyles.signIn}>
                    <Text style={regStyles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};