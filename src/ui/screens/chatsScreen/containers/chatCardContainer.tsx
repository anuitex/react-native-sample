import React from 'react';
import ChatPreviewCardComponent from '../components/chatPreviewCard';

export const ChatCardContainer = ({chat, navigation}) => {
    return (
        <ChatPreviewCardComponent navigation={navigation} message={chat} />
    );
};