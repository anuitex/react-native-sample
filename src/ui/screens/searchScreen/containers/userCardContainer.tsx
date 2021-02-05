import React from 'react';
import { UserCardComponent } from '../components/userCard';

export const UserCardContainer = ({user}) => {
    return (
        <UserCardComponent user={user} />
    );
};