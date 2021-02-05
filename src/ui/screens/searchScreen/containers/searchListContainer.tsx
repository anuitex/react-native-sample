import React from 'react';
import { useSelector } from 'react-redux';
import { SearchListComponent } from '../components/searchList';
import { AppState } from '../../../../appStore';
import { ResponseUserModel } from '../../../../shared/models/response/responseUser.model';

export const SearchListContainer = (): JSX.Element => {
    const users = useSelector<AppState, ResponseUserModel[]>((state): ResponseUserModel[] => state.search.searchData);
    
    return (
        <SearchListComponent users={users}/>
    );
};