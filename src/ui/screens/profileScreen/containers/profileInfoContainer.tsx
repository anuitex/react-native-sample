import React from 'react';
import { AppState } from '../../../../appStore';
import { useSelector } from 'react-redux';
import { ResponseOwnerDataModel } from '../../../../shared/models/response/responseOwnerData.model';
import { ProfileInfoComponent } from '../components/profileInfo';

export const ProfileInfoContainer = () => {
    const owner = useSelector<AppState, ResponseOwnerDataModel>((state): ResponseOwnerDataModel => state.login.ownerData);
    return (
        <ProfileInfoComponent owner={owner}/>
    );
};