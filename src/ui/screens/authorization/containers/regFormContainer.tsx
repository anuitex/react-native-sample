import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../appStore';
import { RegFormComponent } from '../components';

interface RegContainerProps {
    navigation: any;
}

export const RegFormContainer = ({navigation}: RegContainerProps): JSX.Element => {
    const status = useSelector<AppState, boolean>((state): boolean => {
        return state.register.status === "success";
    })
    return (
        <RegFormComponent status={status} navigation={navigation} />
    );
};