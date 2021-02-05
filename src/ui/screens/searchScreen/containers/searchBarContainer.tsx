import React from 'react';
import { useSelector } from 'react-redux';
import { SearchBarComponent } from '../components/searchBar';
import { AppState } from '../../../../appStore';


export const SearchBarContainer = (): JSX.Element => {

    const loading = useSelector<AppState, boolean>((state): boolean => {
        return state.search.status === 'running';
    });
    return (
        <SearchBarComponent loading={loading}/>
    );
};