import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../appStore';
import { ResponseOwnerDataModel } from '../../../../shared/models/response/responseOwnerData.model';
import { ChatsListComponent } from '../components/chatsList';

export const ChatsListContainer = () => {
    const owner = useSelector<AppState, ResponseOwnerDataModel>((state): ResponseOwnerDataModel => state.login.ownerData);
    return (
        <ChatsListComponent owner={owner} />
    )
}