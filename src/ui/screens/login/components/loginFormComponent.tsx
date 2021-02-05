import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TextInput as Input,
    TouchableOpacity,
} from 'react-native';
import { AppState } from '../../../../appStore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import '../styles';
import { loginStyles } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../store/action';
import { RequestLoginModel } from '../../authorization/models/request/requestLoginModel';


interface RegFormProps {
    navigation: any;
    status: boolean;
}

interface body {
    email: string;
    password: string;
}

export const LoginFormComponent = ({navigation, status}: RegFormProps): JSX.Element => {

    const dispatch = useDispatch();

    const loginData = useSelector<AppState, RequestLoginModel>((state): RequestLoginModel => state.register.loginData);
    const email = loginData ? loginData.email : '';
    const password = loginData ? loginData.password : '';

    const [inputState, setInputState] = useState({
        email, 
        password, 
        checkTextInputChange: false,
        secureTextEntry: true
    });

    useEffect(() => {
        status && navigation.replace("main");
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
        dispatch(LoginAction(body));        
    };
 
    
    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.header}>
                <Text style={loginStyles.headerText}>Welcome!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" duration={1000} style={loginStyles.footer}>
                <View style={loginStyles.inputWrapper}>
                    <Text style={loginStyles.footerText}>Email</Text>
                    <View style={loginStyles.action}>
                        <FontAwesome name="envelope" color="#fff" size={20} />
                        <Input 
                            value={inputState.email}
                            onChangeText={(val: string) => emailInputChange(val)}
                            style={loginStyles.input} 
                            keyboardType={'email-address'} 
                            placeholder="your email" 
                            placeholderTextColor="#fff" 
                            autoCapitalize='none'
                        />
                        {inputState.checkTextInputChange ?
                         <Feather name="check-circle" color="green" size={20} />
                         : null}
                    </View>

                    <Text style={loginStyles.footerText}>Password</Text>
                    <View style={loginStyles.action}>
                        <FontAwesome name="lock" color="#fff" size={20} />
                        <Input
                            onChangeText={(val: string) => setInputState({...inputState, password: val})}    
                            value={inputState.password} 
                            style={loginStyles.input} 
                            placeholder="your password" 
                            placeholderTextColor="#fff"
                            secureTextEntry={inputState.secureTextEntry ? true : false}
                        />
                        <TouchableOpacity onPress={changeSecureTextEntry}>
                            <Feather name={inputState.secureTextEntry ? "eye-off" : "eye"} color="grey" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => submitHandler(inputState)} style={[loginStyles.button, {marginBottom: 10}]}>
                    <Text style={loginStyles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace("signUp")} style={loginStyles.signIn}>
                    <Text style={loginStyles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};