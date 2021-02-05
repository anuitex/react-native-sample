import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../appStore';
import { LoginFormComponent } from '../components/loginFormComponent';

interface RegContainerProps {
    navigation: any
}

export const LoginFormContainer = ({navigation}: RegContainerProps): JSX.Element => {

    const status = useSelector<AppState, boolean>((state): boolean => {
        return state.login.status === "success";
    });
    return (
        <LoginFormComponent status={status} navigation={navigation} />
    );
};